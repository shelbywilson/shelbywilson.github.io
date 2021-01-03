import React, { useEffect, useRef } from 'react';

export default (props) => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [props.detail.id])

    return (
        <div className={`home-detail`}>
            <div className='home-detail-container'>
                <div className='home-detail-right-align'>
                    <h2>
                        <span>
                            {props.detail.title}
                        </span>
                    </h2>

                    {props.detail.subtitle  && <h3>{props.detail.subtitle}</h3>}
                    
                    <div className={`home-detail-content home-detail-${props.detail.id}`}>
                        {props.detail.type  && <h4>&#9724;&nbsp;{props.detail.type}</h4>}

                        {props.detail.content}

                        {props.detail.year ? 
                            <p className='home-content-year'>
                                {props.detail.year}&nbsp;&#9633;
                            </p>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}