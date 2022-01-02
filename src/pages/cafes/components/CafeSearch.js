import React from 'react';
import Select from 'react-select';
import { selectStyles, getAllCafeRankings } from "./../util";

export const CafeSearch = ({filters, setFilters}) => {
    return (
        <Select
            hideSelectedOptions={false}
            isMulti
            options={getAllCafeRankings({...filters, cafes: []}, true)
                .map(cafe => ({name: cafe.Name[0]}))
                .sort((a, b) => a.name.localeCompare(b.name))}
            value={filters.cafes}
            onChange={(val) => setFilters("cafes", val)}
            getOptionValue={(option) => option.name}
            getOptionLabel={(option) => option.name}
            cropWithEllipsis
            placeholder={"Filter by name"}
            className="select-name"
            styles={selectStyles}
        />
    )
}

export default CafeSearch;