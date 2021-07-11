import React from 'react';
import _ from "lodash";

export default ({sorting, setSorting}) => {

    return (
        <div className="d-flex flex-row">
            <select style={{flex: "1 1 50%", marginRight: "0.5rem"}} value={sorting.type}
                onChange={(e) => setSorting("type", e.target.value)}
                >
                <option value="">
                    Sort by...
                </option>
                {["Best", "Worst", "Most Controversial"].map(type => (
                    <option key={type}>
                        {type}
                    </option>
                ))}
            </select>
            <select style={{flex: "1 1 50%"}} value={sorting.attr}
                onChange={(e) => setSorting("attr", e.target.value)}
                >
                <option value="">
                    Attribute...
                </option>
                {["Coffee", "Food", "Vibe", "Service", "Pretentiousness", "Good place to work?", "Overall"].map(attr => (
                    <option key={attr}>
                        {attr}
                    </option>
                ))}
            </select>
        </div>
    )
}