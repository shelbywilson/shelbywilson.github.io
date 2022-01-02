import React from 'react';
import { selectStyles } from "./../util";
// @ts-ignore
import Select from 'react-select';

interface Props {
    sorting: {
        type: string, 
        attr: string,
    },
    setSorting: (key: string, val: string) => void,
}

interface Option {
    key: string,
    value: string,
}

export const Sorting: React.FC<Props> = ({sorting, setSorting}) => {
    return (
        <div className="d-flex flex-row">
            <div style={{flex: "1 1 50%", marginRight: "0.75rem"}}>
                <Select
                    hideSelectedOptions={false}
                    options={["Best", "Worst", "Most Controversial"].map(val => ({value: val}))}
                    getOptionLabel={(option: Option) => option.value}
                    getOptionValue={(option: Option) => option.value}
                    value={sorting.type ? {value: sorting.type} : null} 
                    onChange={(option: Option) => setSorting("type", option.value)}
                    placeholder={"Sort by..."}
                    className="select-name"
                    styles={selectStyles}
                />
            </div>
            <div style={{flex: "1 1 50%"}}>
                <Select
                    hideSelectedOptions={false}
                    options={["Coffee", "Food", "Vibe", "Service", "Pretentiousness", "Good place to work?", "Overall"].map(val => ({value: val}))}
                    getOptionLabel={(option: Option) => option.value === "Good place to work?" ? "Place to work" : option.value}
                    getOptionValue={(option: Option) => option.value}
                    value={sorting.attr ? {value: sorting.attr} : null}
                    onChange={(option: Option) => setSorting("attr", option.value)}
                    placeholder={"Attribute..."}
                    className="select-name"
                    styles={selectStyles}
                />
            </div>
        </div>
    )
}

export default Sorting;