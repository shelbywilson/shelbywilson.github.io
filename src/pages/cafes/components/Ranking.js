import React, { useEffect, useRef } from 'react';
import _ from "lodash";
import RankingAmount from './RankingAmount';
import { getSelectedNeighborhood } from '../util';

export default ({cafe, removeSelection, addSelection, selected}) => {
    const neighborhood = getSelectedNeighborhood(cafe.Name[0])
    const rankingRef = useRef(null)

    const executeScroll = () => rankingRef.current.scrollIntoView()    

    useEffect(() => {
        if (selected) {
            executeScroll()
        }
    }, [selected])

    const neighborhoodName = _.get(neighborhood, "properties.nhood", "Everywhere");
    return (
        <div ref={rankingRef} className="cafes-ranking">
            {neighborhoodName !== "Everywhere" ? 
                <button className="d-flex flex-row" type="button" onClick={selected ? removeSelection : addSelection}>
                    <h2>
                        {cafe.Name[0]}
                    </h2>
                    <span style={{fontWeight: 600, color: selected ? "#039be5" : "#000", marginLeft: "0.5rem"}}>
                        &#8889;
                    </span>
                </button>
                :
                <h2>
                    {cafe.Name[0]}
                </h2>
            }
            <h3>
                {neighborhoodName} {_.get(neighborhood, "properties.nested") ? " — " + _.get(neighborhood, "properties.nested") : ""}
            </h3>
            {["Coffee", "Food", "Vibe", "Service", "Pretentiousness", "Good place to work?", "Overall"].map(attr => 
                <div key={attr} className="d-flex flex-row justify-between" style={{margin: "0.5rem 0"}}>
                    <em style={{fontSize: "0.85rem"}}>{attr}</em>&nbsp;
                    <RankingAmount values={_.compact(cafe[attr])}
                        />
                </div>
            )}
            <div>
                {_.compact(cafe.Notes).map((note, i) => 
                    <blockquote key={`note-${i}`}>
                        {note}
                    </blockquote>
                )}
            </div>
        </div>
    )
}