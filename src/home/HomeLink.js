import React, { Fragment } from 'react';

export const HomeLink = ({ route }) => {
    return (
        <div className={`img-container ${route.id} ${route.dark ? 'dark' : ''}`}
            style={!route.img && !route.homeBanner ? {minHeight: 102, border: "1px solid #000"} : {}}
            >
            <div>
                {route.img ?
                    <img src={route.img} alt={route.alt} />
                    :
                    route.homeBanner
                }
            </div>
            {route.type ? <h4>&#9633;&nbsp;{route.type}</h4> : null}
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

export default HomeLink;