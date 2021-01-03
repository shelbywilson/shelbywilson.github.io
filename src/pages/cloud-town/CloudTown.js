import React, { useState, useEffect } from 'react';

import CloudBlock from './CloudBlock';
import data from './data';

export default (props) => {
    const clouds = Object.keys(data).sort((a,b) => {
        return data[b].date.localeCompare(data[a].date)
    });
    const hash = window.location.hash.replace('_no-header', '').split('#');
    const hashCloudIndex = hash[hash.length - 1];

    // if not specified, allow to be changed
    let cloudIndex = props.cloudIndex || -1;

    if (hashCloudIndex !== '') {
        cloudIndex = parseInt(hashCloudIndex, 10) - 1;

        if (cloudIndex > clouds.length) {
            cloudIndex = -1;
        }
    }

    const getCloud = () => (
        cloudIndex > -1 ? 
            data[ clouds[ cloudIndex ] ]
            :
            data[ clouds[Math.floor(Math.random() * clouds.length)] ]
    )

    const [state, setState] = useState({
        cloud: getCloud(),
        bgVisible: false,
        row1: Math.floor(Math.random() * 3) + 2,
        row2: Math.floor(Math.random() * 3) + 2,
    })

    const onHover = bgVisible => setState(prevState => ({...prevState, bgVisible}));

    const nullItems = (count) => Array.apply(null, Array(count)).map(() => {})

    const reset = () => {
        setState(prevState => ({
            ...prevState, 
            cloud: getCloud(),
            bgVisible: false,
        }))
    }

    const useSmall = window.innerWidth < 800;
    const src = state.cloud[useSmall ? 'src_small' : 'src'];

    return (
        <React.Fragment>
            <img className='cloud-town__bg' src={src} alt='clouds' style={{opacity: state.bgVisible ? 1 : 0}} />
            <div className='cloud-town__container'>
                <div className='cloud-town'>
                    {nullItems(state.row1).map((item,i) => 
                        <CloudBlock 
                            key={i} 
                            img={`url(${src})`} 
                            onHover={onHover}
                            delay={3/(i+1) * 100}
                            triggerReset={state.triggerReset}
                            />
                    )}
                </div>
                <div className='cloud-town' style={{marginTop: '-40vh'}}>
                    {nullItems(state.row2).map((item,i) => 
                        <CloudBlock 
                            key={i} 
                            img={`url(${src})`} 
                            onHover={onHover}
                            delay={i * 100 + 300}
                            triggerReset={state.triggerReset}
                            />
                    )}
                </div>
            </div>

            {cloudIndex === -1 ?
                <button onClick={reset} className='cloud-town__reset'></button>
                :
                null
            }
            
            {cloudIndex !== -1 ?
                <p className='cloud-town__label'>
                    {state.cloud.city}
                    <br/>
                    {state.cloud.date} {state.cloud.time} 
                </p>
                :
                null 
            }
        </React.Fragment>
    )
}