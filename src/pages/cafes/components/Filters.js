import React from 'react';
import NeighborhoodSearch from './NeighborhoodSearch';
import CafeSearch from './CafeSearch';

export default ({filters, setFilters}) => {
    return (
        <div className="cafes-filters">
            <div style={{margin: "0.5rem 0"}}>
                <NeighborhoodSearch 
                    filters={filters} 
                    setFilters={setFilters}
                    />
            </div>
            <div style={{margin: "0.5rem 0"}}>
                <CafeSearch
                    filters={filters}
                    setFilters={setFilters}
                    />
            </div>
            <label style={{margin: "0.5rem 0 0 0", display: "block"}}>
                <input type="checkbox" 
                    checked={!filters.onlyRanked} 
                    onChange={(e) => setFilters("onlyRanked", !filters.onlyRanked)} />

                Include Unranked
            </label>
        </div>
    )
}