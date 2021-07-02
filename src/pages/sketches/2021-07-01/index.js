import React, { useState } from 'react';
import { handleKeyPress } from "./../../../util/accessibility";

import "./sketch.scss";

const flower = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Platycodon_grandiflorum2.jpg/1920px-Platycodon_grandiflorum2.jpg"

export default () => {
    const [persist, setPersist] = useState(Array.apply(null, Array(25)).map(() => false));

    const togglePersist = (i) => {
        setPersist(prev => {
            let arr = [...prev];
            arr[i] = !prev[i];
            return arr;
        })
    }

    const width = Math.min(600, window.innerWidth - 40);
    const height = width * 4/3;
    const d = width/6;

    return (
        <div>
            <div className="pos-relative container" style={{height, width}}>
                <img src={flower} alt="" style={{height, width, maxWidth: width, margin: 0}} />
                {persist.map((state, i) => (
                    <span key={`${i}-group`} 
                        className="pos-absolute" 
                        onClick={() => togglePersist(i)} 
                        role="button" 
                        tabIndex="0" 
                        onKeyPress={(e) => handleKeyPress(e, togglePersist(i))}
                        style={{left: `calc(10px + ${Math.floor(i/5) * 20}%)`, top: `calc(10px + ${i%5 * 20}%)`}}>
                        <div className="pos-absolute" style={{
                            borderRadius: "100%", 
                            background: "#fff",
                            width: d - 2, 
                            height: d - 2, 
                            margin: 1,
                        }}>
                        </div>
                        <div className={`pos-absolute circle ${state ? "open" : ""}`} 
                            style={{
                                width: d, 
                                height: d, 
                                backgroundPositionX: `calc(${Math.floor(i/5) * 20}% - ${Math.floor(i/5) * d/5}px - 10px)`, 
                                backgroundPositionY: `calc(${i%5 * 20}% - ${i%5 * d/5}px - 10px)`,
                                backgroundImage: `url(${flower})`, 
                                backgroundSize: `${width}px, ${height}px`,
                            }}>  
                        </div>
                    </span>
                ))}
            </div>
            <figcaption>
                Image of <a href="https://en.wikipedia.org/wiki/Platycodon" target="_blank">balloon flower</a>, Wikimedia Commons
            </figcaption>
        </div>
    )
}