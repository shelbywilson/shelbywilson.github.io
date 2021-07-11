import React, {  useState, useEffect } from 'react';
import _ from "lodash";
import Ranking from "./components/Ranking";
import Sorting from "./components/Sorting";
import Filters from "./components/Filters";
import Map from "./components/Map";
import { getAllCafeRankings, getSelectedNeighborhood, isRanked } from './util';

import "./_cafes.scss"

export default () => {
    const [selected, setSelected] = useState([]);
    const [sorting, setSorting] = useState({
        type: "",
        attr: "",
    })
    const [filters, setFilters] = useState({
        onlyRanked: true,
        neighborhoods: [],
        cafes: [],
    })

    useEffect(() => {
        if (!sorting.type && sorting.attr) {
            setSorting(prev => ({...prev, type: "Best"}))
        }
    }, [sorting])

    useEffect(() => {
        if (filters.neighborhoods.length > 0) {
            if (selected.length > 0) {
                setSelected(prev => {
                    return prev.filter(name => {
                        const mappedNeighborhood = getSelectedNeighborhood(name);
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
        <div className="cafes" style={{minHeight: "100vh", background: "linear-gradient(0deg, rgb(185 225 254), rgb(226 246 255))"}}>
            <header>
                <h1>An Informal Survey of Seattle Cafés</h1>
                <a href={'/#/cafes'}>
                    <h3>info</h3>
                </a>
           </header>
            <Map 
                filters={filters}
                selected={selected}
                setSelected={(name) => setSelected(prev => {
                    if (prev.indexOf(name) === -1) {
                        return [...prev, name];
                    }
                    return [...prev].filter(n => n !== name);
                })}
                />
            <div className="cafes-sidebar d-flex">
                <div className="cafes-sidebar-filters">
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
                        <h3>{filteredList.length} Cafés: </h3>
                        {selected.length > 0 ?
                            <button type="button"
                                onClick={() => setSelected([])}
                                >
                                    Reset Map
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
                            addSelection={() => setSelected(prev => prev.indexOf(cafe.Name[0]) === -1 ? [...prev, cafe.Name[0]] : [...prev] )}
                            removeSelection={() => setSelected(prev => [...prev.filter(n => n !== cafe.Name[0])] )}
                            selected={selected.indexOf(cafe.Name[0]) > -1}
                            />
                    )}
                </div>
            </div>
        </div>
    )
}