import cafes from "./data/survey/blank_survey.csv";
import survey_1 from "./data/survey/survey_am.csv";
import survey_2 from "./data/survey/survey_sg.csv";
import survey_3 from "./data/survey/survey_cb.csv";
import survey_4 from "./data/survey/survey_hs.csv";
import survey_5 from "./data/survey/survey_mc.csv";
import survey_6 from "./data/survey/survey_mc2.csv";
import survey_7 from "./data/survey/survey_sw.csv";
import survey_8 from "./data/survey/survey_mf.csv";
const neighborhoods = require("./data/neighborhoods.geojson");
import * as d3 from "d3";
import _ from "lodash";

export const selectStyles = {
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? 'var(--background)' : '#fff',
      ":hover": {
        backgroundColor: 'var(--background)',
        color: "#fff",
      }
    }),
    valueContainer: (style) => ({
        ...style,
        maxHeight: 120,
        overflow: "auto",
    }),
    multiValue: (styles) => ({
        ...styles,
        borderRadius: 12,
        backgroundColor: "var(--neighborhood)",
        fontWeight: 100,
        letterSpacing: "0.04em",
    }),
    multiValueLabel: (styles) => ({
        ...styles,
        padding: "5px",
        color: "#black",
    }),
    multiValueRemove: (styles) => ({
        ...styles,
        cursor: "pointer",
        borderRadius: 12,
        ':hover': {
            backgroundColor: "var(--accent)",
            color: "#fff",
        }
    }),
  }

export const cafeCoords = cafes.filter(cafe => !!cafe.Long).map((cafe) => {
    const coords = [parseFloat(cafe.Long), parseFloat(cafe.Lat)];
    return {
        type: "Feature",
        id: cafe.Name,
        cafe: cafe,
        geometry: {
            type: "Point", 
            coordinates: coords,
        },
        mappedNeighborhood: neighborhoods.features.find(area => {
            return d3.polygonContains(area.geometry.coordinates[0], coords)
        })
    }
})

export const getBoundedNeighborhood = (name) => {
    return _.get(cafeCoords.find(cafe => cafe.id === name), "mappedNeighborhood", null)
}

export const isRanked = (name) => {
    return getCafeRankings(name, true).Overall.length > 0;
}

export const filteredCoords = (filters) => {
    return cafeCoords.filter(cafe => {
        if (filters.onlyRanked) {
            if (!isRanked(cafe.id)) {
                return false;
            }
        }
        if (filters.cafes.length > 0) {
            if (!filters.cafes.find(option => {
                return option.name === getCafeRankings(cafe.id, true).Name[0]
            })) {
                return false
            }
        }
        if (filters.neighborhoods.length > 0) {
            if (filters.neighborhoods.findIndex(nhood => {
                return nhood.name === _.get(cafe, "mappedNeighborhood.properties.name", null)
             }) === -1) {
                return false;
            }
        }
        return true;
    })
}

export const getRepresentedNeighborhoods = (filters) => {
    let represented = {};

    if (filters.neighborhoods.length > 0) {
        neighborhoods.features.forEach(nhood => {
            if (filters.neighborhoods.find(n => n.name === nhood.properties.name)) {
                represented[nhood.id] = nhood;
            }
        })
    } else {
        const cafeData = filteredCoords(filters);
        
        cafeData.forEach((cafe) => {
            if (cafe.mappedNeighborhood) {
                represented[cafe.mappedNeighborhood.id] = cafe.mappedNeighborhood;
            }
        })
    }

    return represented;
}

export const getCafeRankings = (name, compact = false) => {
    let attrs = {
        "Overall": [],
    };
    Object.keys(cafes[0]).forEach((attr) => (
        attrs[attr] = []
    ));
    [survey_1, survey_2, survey_3, survey_4, survey_5, survey_6, survey_7, survey_8].forEach(survey => {
        const entry = survey.find(row => row.Name === name);
        let overallSum = [];
        if (entry) {
            Object.keys(attrs).forEach(key => {
                if (!compact || entry[key]) {
                    attrs[key].push(entry[key])

                    if (!isNaN(entry[key])) {   
                        overallSum.push(entry[key])
                    }
                }
            })
            attrs["Overall"].push(_.mean(_.compact(overallSum)) || null)
        }
    })

    if (compact) {
        attrs["Overall"] = _.compact(attrs["Overall"])
    }
    
    return attrs;
}

export const getAllCafeRankings = (filters, compact = false) => {
    return cafes.map(cafe => {
        return getCafeRankings(cafe.Name, compact)
            
    }).filter(ranking => {
        if (filters.cafes.length > 0) {
            if (!filters.cafes.find(cafe => cafe.name === ranking.Name[0])) {
                return false
            }
        }
        if (filters.onlyRanked) {
            if (ranking.Overall.length === 0) {
                return false;
            }
        }
        if (filters.neighborhoods.length > 0) {
            const neighborhood = getBoundedNeighborhood(ranking.Name[0]);
            if (!filters.neighborhoods.find(nhood => {
                return nhood.name === _.get(neighborhood, "properties.name", null)
             })) {
                return false;
            }
            
        }
        if (filters.terms.length > 0) {
            if (!filters.terms.find(term => !!ranking.Notes.find(note => note.toLowerCase().indexOf(term.value) > -1))) {
                return false;
            }
        }
        return true;
    })
}

export const getCafeReviewTerms = (filters) => {
    let dictionary = {};
    const ignore = [
        "at",
        "the",
        "an",
        "a",
        "i",
    ]
    getAllCafeRankings({...filters, terms: []}, true).forEach(cafe => {
        cafe.Notes.forEach(note => {
            note.split(" ").forEach(word => {
                const normalized = word.replace(/[\:\,\&\"\-\/\.\?\!\;"]+/g,"").toLowerCase();
                if (normalized.length > 1 && !ignore.find(w => w === normalized)) {
                    dictionary[normalized] = true;
                }
            })
        })
    })

    return Object.keys(dictionary)
}