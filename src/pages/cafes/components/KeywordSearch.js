import React from 'react';
import Select from 'react-select';
import _ from "lodash";
import { selectStyles, getCafeReviewTerms } from "../util";

export default ({filters, setFilters}) => {
    const terms = getCafeReviewTerms(filters);
    return (
        <Select
            hideSelectedOptions={false}
            isMulti
            options={terms
                .map(term => ({value: term}))
                .sort((a, b) => a.value.localeCompare(b.value))}
            value={filters.terms}
            onChange={(val) => setFilters("terms", val)}
            getOptionValue={(option) => option.value}
            getOptionLabel={(option) => option.value}
            cropWithEllipsis
            placeholder={"Filter by keyword"}
            className="select-name"
            styles={selectStyles}
        />
    )
}