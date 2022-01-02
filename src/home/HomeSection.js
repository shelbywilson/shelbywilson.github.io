import React, { Fragment } from 'react';
// import { useIntersection } from '../common/UseIntersection';

export const HomeSection = ({ route, id }) => {
    // const ref = useRef();

    // console.log(useIntersection(ref.current, '0px'), id)
    return (
        <div className={`img-container ${id} ${route.dark ? 'dark' : ''}`}
            style={!route.img && !route.homeBanner ? {minHeight: 102, border: "1px solid #000"} : {}}
            // ref={ref}
            >
            <div>
                {route.img ?
                    <img src={route.img} alt={route.alt} />
                    :
                    route.homeBanner
                }
            </div>
            {route.type ? <h4>&#9724;&nbsp;{route.type}</h4> : null}
            <a href={route.url}>
                {route.title.split('').map((letter, i) => 
                    letter.replace(/^\s+|\s+$/g, '').length === 0 ? 
                        <Fragment key={i}>&nbsp;</Fragment> 
                        : 
                    <span key={i}>{letter}</span>
                )}
            </a>
        </div>
    )
}