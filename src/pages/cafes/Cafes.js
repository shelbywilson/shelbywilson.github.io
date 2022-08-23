import React, {  useState, useEffect } from 'react';
import _ from "lodash";
import Ranking from "./components/Ranking";
import Sorting from "./components/Sorting";
import Filters from "./components/Filters";
import Map from "./components/Map";
import { getAllCafeRankings, getBoundedNeighborhood, isRanked} from './util';

import "./_cafes.scss"

const defaultFilters = () => ({
    onlyRanked: true,
    neighborhoods: [],
    cafes: [],
    terms: [],
})

const defaultSorting = () => ({
    type: "",
    attr: "",
})

export const Cafes = () => {
    const [selected, setSelected] = useState([]);
    const [sorting, setSorting] = useState(defaultSorting())
    const [filters, setFilters] = useState(defaultFilters())

    useEffect(() => {
        if (!sorting.type && sorting.attr) {
            setSorting(prev => ({...prev, type: "Best"}))
        } else if (sorting.type && sorting.attr) {
            setSelected([sortedCafes()[0].Name[0]])
        }
    }, [sorting])

    useEffect(() => {
        if (filters.neighborhoods.length > 0) {
            if (selected.length > 0) {
                setSelected(prev => {
                    return prev.filter(name => {
                        const mappedNeighborhood = getBoundedNeighborhood(name);
                        if (mappedNeighborhood) {
                            return (filters.neighborhoods.find(n => n.name === _.get(mappedNeighborhood, "properties.name"))) 
                        }
                    })
                        
                })
            }
        }
    }, [filters.neighborhoods])

    useEffect(() => {
        if (filters.cafes.length > 0) {
            setSelected(prev => {
                const list = [...prev, ...filters.cafes.map(option => option.name)];
                return _.uniq(list.filter(name => {
                    return filters.cafes.find(option => option.name === name)
                }))
            })
        }
    }, [filters.cafes])

    useEffect(() => {
        if (filters.onlyRanked) {
            setSelected(prev => {
                return prev.filter(name => {
                    return isRanked(name)
                })
            })
            if (filters.cafes.length > 0) {
                setFilters(prev => {
                    return {
                        ...prev,
                        cafes: prev.cafes.filter(option => isRanked(option.name)),
                    }
                })
            }
        }
    }, [filters.onlyRanked])

    const sortedCafes = () => {
        let ranked = getAllCafeRankings(filters, true)  
        
        if (sorting.type && sorting.attr) {
            ranked = ranked.sort((a,b) => {
                if (sorting.type === "Most Controversial") {
                    return ((_.max(b[sorting.attr]) || 0) - (_.min(b[sorting.attr]) || 0)) - ((_.max(a[sorting.attr]) || 0) - (_.min(a[sorting.attr]) || 0))
                } 
                return (_.mean(b[sorting.attr]) || 0) - (_.mean(a[sorting.attr]) || 0)
            })

            if (sorting.type === "Worst") {
                ranked = _.reverse(ranked);
            }       
        } else {
            ranked = ranked.sort((a, b) => a.Name[0].localeCompare(b.Name[0]))
        }
           
        return ranked;
    }

    const filteredList = sortedCafes();
    
    return (
        <div className="cafes">
            <Map 
                filters={filters}
                selected={selected}
                setSelected={(name) => setSelected(prev => {
                    if (prev.indexOf(name) === -1) {
                        return [name];
                    }
                    return [];
                })}
                setFilters={(key, val) => {
                    if (_.find(filters[key], val)) {
                        setFilters(prev => ({
                            ...prev,
                            [key]: prev[key].filter(el => !_.isEqual(el, val)),
                        }))
                    } else {
                        setFilters(prev => ({
                            ...prev,
                            [key]: [...prev[key], val],
                        }))
                    }
                }}
                />
            <div className="cafes-sidebar d-flex">
                <div className="cafes-sidebar-filters">
                    <header>
                        <h1>An Informal Survey of Seattle Cafés</h1>
                        <a href={'/#/about-cafes'}>
                            <h3>info</h3>
                        </a>
                    </header>
                    <div style={{margin: "1rem 0"}}>
                        <Filters 
                            filters={filters}
                            setFilters={(key, val) => setFilters(prev => ({...prev, [key]: val}))} 
                            />  
                    </div>
                    <div style={{margin: "0 0 0.5rem 0"}}>
                        <Sorting 
                            sorting={sorting}
                            setSorting={(key, val) => setSorting(prev => ({...prev, [key]: val}))}
                            />
                    </div>
                    <div className="cafes-sidebar-filters-info d-flex flex-row">
                        <h2>{filteredList.length} {`Café${filteredList.length !== 1 ? 's' : ''}`}: </h2>
                        {selected.length > 0
                            || !_.isEqual(filters, defaultFilters())
                            || !_.isEqual(sorting, defaultSorting()) ?
                            <button type="button"
                                onClick={() => {
                                    setSelected([])
                                    setFilters(defaultFilters())
                                    setSorting(defaultSorting())
                                }}
                                >
                                    Reset
                            </button>
                            :
                            null 
                        }
                    </div>
                </div>
                <div style={{overflow: "auto"}}>
                    {filteredList.map(cafe => 
                        <Ranking key={cafe.Name[0]}
                            cafe={cafe}
                            addSelection={() => setSelected(prev => prev.indexOf(cafe.Name[0]) === -1 ? [cafe.Name[0]] : [] )}
                            removeSelection={() => setSelected([])}
                            selected={selected.indexOf(cafe.Name[0]) > -1}
                            />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cafes;