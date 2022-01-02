import React from 'react';
import Select from 'react-select';
import { getRepresentedNeighborhoods, selectStyles } from "./../util";

export const NeighborhoodSearch = ({filters, setFilters}) => {
    const represented = getRepresentedNeighborhoods({...filters, cafes: [], neighborhoods: []})
    return (
        <Select
            hideSelectedOptions={false}
            isMulti
            options={Object.keys(represented).map(id => (
                {
                    nhood: represented[id].properties.nhood,
                    nested: represented[id].properties.nested,
                    name: represented[id].properties.name,
                }
            ))}
            value={filters.neighborhoods}
            onChange={(val) => setFilters("neighborhoods", val)}
            getOptionValue={(option) => option.name}
            getOptionLabel={(option) => `${option.nhood}${option.nested ? " – " + option.nested : ""}`}
            cropWithEllipsis
            placeholder={"Filter by neighborhood"}
            className="select-name"
            styles={selectStyles}
        />
    )
}

export default NeighborhoodSearch;