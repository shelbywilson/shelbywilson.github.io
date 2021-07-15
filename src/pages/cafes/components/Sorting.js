import React from 'react';
import { selectStyles } from "./../util";
import Select from 'react-select';
import _ from "lodash";

export default ({sorting, setSorting}) => {
    return (
        <div className="d-flex flex-row">
            <div style={{flex: "1 1 50%", marginRight: "0.75rem"}}>
                <Select
                    hideSelectedOptions={false}
                    options={["Best", "Worst", "Most Controversial"].map(val => ({value: val}))}
                    getOptionLabel={(option) => option.value}
                    getOptionValue={(option) => option.value}
                    value={sorting.type ? {value: sorting.type} : null} 
                    onChange={(option) => setSorting("type", option.value)}
                    placeholder={"Sort by..."}
                    className="select-name"
                    styles={selectStyles}
                />
            </div>
            <div style={{flex: "1 1 50%"}}>
                <Select
                    hideSelectedOptions={false}
                    options={["Coffee", "Food", "Vibe", "Service", "Pretentiousness", "Good place to work?", "Overall"].map(val => ({value: val}))}
                    getOptionLabel={(option) => option.value === "Good place to work?" ? "Place to work" : option.value}
                    getOptionValue={(option) => option.value}
                    value={sorting.attr ? {value: sorting.attr} : null}
                    onChange={(option) => setSorting("attr", option.value)}
                    placeholder={"Attribute..."}
                    className="select-name"
                    styles={selectStyles}
                />
            </div>
        </div>
    )
}