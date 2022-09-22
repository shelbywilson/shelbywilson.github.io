import React from 'react';
import _ from "lodash";

import "./../_cafes-ranking-amount.scss"

export const RankingAmount = ({values}) => {
    const value = _.mean(values);
    const percent = value / 5;

    if (values.length === 0) {
        return (
            <div className="cafes-ranking-amount-label">
                n/a
            </div>
        )
    }
    const width = 60;
    return (
        <div className="d-flex flex-row">
            <div className="cafes-ranking-amount pos-relative" style={{width: 60, height: 12, background: "var(--ranking-bg)"}}>
                <div className="position-abs h-100" style={{width: percent * 60, top: 0, left: 0, background: `var(--ranking-${percent >= 0.7 ? "good" : percent >= 0.5 ? "average" : "bad"})`}}>

                </div>
                <div className="pos-absolute" style={{width: Math.abs(_.max(values) - _.min(values)) * width/5, top: 5, height: 2, left: _.min(values) * width/5 - 3, background: "var(--ranking-range)"}}></div>
                <div className="pos-absolute" style={{width: 6, borderRadius: "100%", top: 3, height: 6, left: _.min(values) * width/5 - 3, background: "var(--ranking-range)"}}></div>
                <div className="pos-absolute" style={{width: 6, borderRadius: "100%", top: 3, height: 6, left: _.max(values) * width/5 - 3, background: "var(--ranking-range)"}}></div>
            </div>
            <div className="cafes-ranking-amount-label">
                {parseFloat(value.toFixed(1))}
            </div>
        </div>
    )
}

export default RankingAmount;