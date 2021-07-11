import React from 'react';

export default ({values}) => {
    const value = _.mean(values);
    const percent = value / 5;

    if (values.length === 0) {
        return (
            <div style={{fontSize: "0.75rem"}}>
                n/a
            </div>
        )
    }
    const width = 60;
    return (
        <div className="d-flex flex-row">
            <div className="cafe-ranking-amount pos-relative" style={{width: 60, height: 12, background: "#fff"}}>
                <div className="position-abs h-100" style={{width: percent * 60, top: 0, left: 0, background: percent > 0.7 ? "#aed581" : percent > 0.5 ? "#ffeb3b" : "#ffa726"}}>

                </div>
                <div className="pos-absolute" style={{width: Math.abs(_.max(values) - _.min(values)) * width/5, top: 5, height: 2, left: _.min(values) * width/5 - 3, background: "#039be5"}}></div>
                <div className="pos-absolute" style={{width: 6, borderRadius: "100%", top: 3, height: 6, left: _.min(values) * width/5 - 3, background: "#039be5"}}></div>
                <div className="pos-absolute" style={{width: 6, borderRadius: "100%", top: 3, height: 6, left: _.max(values) * width/5 - 3, background: "#039be5"}}></div>
            </div>
            <div className="text-right" style={{fontSize: "0.75rem", width: 28}}>
                {parseFloat(value.toFixed(1))}
            </div>
        </div>
    )
}