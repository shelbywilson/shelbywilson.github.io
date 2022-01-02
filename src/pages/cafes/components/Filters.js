import React from 'react';
import NeighborhoodSearch from './NeighborhoodSearch';
import CafeSearch from './CafeSearch';
import KeywordSearch from './KeywordSearch';

export const Filters = ({filters, setFilters}) => {
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
            <div style={{margin: "0.5rem 0"}}>
                <KeywordSearch
                    filters={filters}
                    setFilters={setFilters}
                    />
            </div>
            <label>
                <input type="checkbox" 
                    checked={!filters.onlyRanked} 
                    onChange={() => setFilters("onlyRanked", !filters.onlyRanked)} />

                Include Unranked
            </label>
        </div>
    )
}

export default Filters;