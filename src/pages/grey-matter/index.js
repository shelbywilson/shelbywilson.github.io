import React, { useState, useEffect } from "react";

import "./_grey-matter.scss";
import GreyMatterSketch from "./GreyMatterSketch";

const tabs = [
    'threshold',
    'in-tangent',
]

export const GreyMatter = () => {
    const [inverse, setInverse] = useState(false)
    const [outline, setOutline] = useState(false)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setDetailFromHash();

        window.addEventListener("hashchange", setDetailFromHash);
    
        return () => window.removeEventListener("hashchange", setDetailFromHash);
    }, [])

    const setDetailFromHash = () => {
        const i = tabs.findIndex(tab => `#/${tab}` === window.location.hash);

        if (i > -1) {
            setIndex(i)
        }
    }

	return (
        <div className={`grey-matter ${inverse ? 'inverse' : ''}`}>
            <GreyMatterSketch inverse={inverse}
                outline={outline}
                index={index}
                />

            <div className="pos-absolute d-flex w-100 flex-row justify-between border-bottom primary-background" style={{ zIndex: 1}}>
                <div className="d-flex flex-row">
                    <a href={`/grey-matter/#/${tabs[0]}`} 
                        className={`sketch-nav ${index === 0 ? 'selected' : ''}`}>
                        Threshold
                    </a>
                    <a href={`/grey-matter/#/${tabs[1]}`} 
                        className={`sketch-nav ${index === 1 ? 'selected' : ''}`}>
                        In Tangent
                    </a>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <label className={`toggle`}>
                        Outline
                        <input type="checkbox"
                            checked={outline}
                            onChange={() => setOutline(x => !x)}
                            />
                    </label>
                    <label className={`toggle`}>
                        Invert
                        <input type="checkbox"
                            checked={inverse}
                            onChange={() => setInverse(x => !x)}
                            />
                    </label>
                </div>
            </div>

            <div className="pos-absolute border-left grey-matter-header h-100 d-flex flex-row"
                style={{ 
                    paddingBottom: 50, 
                    paddingTop: 50, 
                    left: '0', 
                    transform: 'rotate(180deg)', 
                    alignItems: 'center',
                    width: 39,
                }}>                
                <div style={{writingMode: 'vertical-rl'}}>
                    Grey Matter • John and June Alcott Gallery, UNC • Nov 5 - Dec 3, 2021
                </div>
            </div>
            <div className="pos-absolute w-100 grey-matter-header border-top"
                style={{ padding: '10px', left: '0', bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>                
                <div className="d-flex flex-row">
                    <a className="arrow secondary-color" 
                        href="https://www.betsykenyon.com/" 
                        target="_blank">
                        Betsy Kenyon
                    </a>
                        &nbsp;•&nbsp;
                    <a className="arrow secondary-color" 
                        href="https://shelby.cool" 
                        target="_blank">
                            Shelby Wilson
                    </a>
                </div>
            </div>
        </div>
    )
};

export default GreyMatter;