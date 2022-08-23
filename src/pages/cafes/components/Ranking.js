import React, { useEffect, useRef } from 'react';
import _ from "lodash";
import RankingAmount from './RankingAmount';
import { getBoundedNeighborhood, cafeCoords } from '../util';

export const Ranking = ({cafe, removeSelection, addSelection, selected}) => {
    const neighborhood = getBoundedNeighborhood(cafe.Name[0])
    const rankingRef = useRef(null)

    const executeScroll = () => rankingRef.current.scrollIntoView()    

    useEffect(() => {
        if (selected) {
            if (window.innerWidth > 667) {
                executeScroll()
            }
        }
    }, [selected])

    const neighborhoodName = _.get(neighborhood, "properties.nhood", "Everywhere");

    const location = cafeCoords.find(coords => coords.cafe.Name === cafe.Name[0]) || {geometry: {coordinates: [0,0]}, googlePlaceId: ''};

    return (
        <div ref={rankingRef} className="cafes-ranking">
            {neighborhoodName !== "Everywhere" ? 
                <div className="d-flex flex-row justify-between align-items-center">
                    <button className="d-flex flex-row" type="button" onClick={selected ? removeSelection : addSelection}>
                        <h2>
                            {cafe.Name[0]}
                        </h2>
                        <div className={`pos-relative cafes-ranking-pin${selected ? "-selected" : ""}`}>
                            <div className="pos-absolute"></div>
                            <div className="pos-absolute"></div>
                        </div>
                    </button>
                    <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${cafe.Name[0].replace(/\s/g, '+')}&query_place_id=${location.googlePlaceId}`}>
                        <img style={{height: 18}} src="https://www.google.com/images/branding/product/ico/maps15_bnuw3a_32dp.ico" />
                    </a>
                </div>
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
                    <blockquote key={`note-${i}`} style={{position: 'relative'}}>
                        <span style={{position: 'absolute', margin: '0 0 0 -0.75rem', fontSize: '1.5rem', lineHeight: '1.5rem'}}>&ldquo;</span>
                        {note}
                    </blockquote>
                )}
            </div>
        </div>
    )
}

export default Ranking;