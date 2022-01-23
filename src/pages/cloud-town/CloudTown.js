import React, { useState, useRef } from 'react';

import CloudBlock from './CloudBlock';
import data from './data';

export const CloudTown = () => {
    const [state, setState] = useState({
        bgVisible: false,
        row1: Math.floor(Math.random() * 3) + 2,
        row2: Math.floor(Math.random() * 3) + 2,
    })
    const locked = useRef(window.location.search.indexOf('_locked') > -1);
    const showLabel = useRef(window.location.search.indexOf('_show-label') > -1);

    const clouds = Object.keys(data).sort((a,b) => {
        return data[b].date.localeCompare(data[a].date)
    });

    const getDefaultCloudIndex = () => {
        const queryCloudIndex = window.location.search.replace('_no-header', '')
            .replace('_locked', '')
            .replace('_show-label', '')
            .replace('/', '')
            .replace('?', '');

        if (!isNaN(queryCloudIndex)) {
            const defaultCloudIndex = parseInt(queryCloudIndex, 10) - 1;

            if (clouds[defaultCloudIndex]) {
               return defaultCloudIndex
            }
        }

        return Math.floor(Math.random() * clouds.length);
    }

    const [cloudIndex, setCloudIndex] = useState(getDefaultCloudIndex())

    const onHover = bgVisible => setState(prevState => ({...prevState, bgVisible}));

    const nullItems = (count) => Array.apply(null, Array(count)).map(() => {})

    const reset = () => {
        setState(prevState => ({
            ...prevState, 
            bgVisible: false,
        }))

        setCloudIndex(prev => !locked.current ? Math.floor(Math.random() * clouds.length) : prev.cloudIndex,)
    }

    const cloud = data[ clouds [cloudIndex] ];
    const useSmall = window.innerWidth < 800;
    const src = cloud[useSmall ? 'src_small' : 'src'];

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

            {!locked.current ?
                <button onClick={reset} className='cloud-town__reset'></button>
                :
                null
            }
            
            {showLabel.current ?
                <a className='cloud-town__label'
                    href='/cloud-diary'>
                    <p>
                        {cloud.city}
                        <br/>
                        {cloud.date} {cloud.time} 
                    </p>
                </a>
                :
                null 
            }
        </React.Fragment>
    )
}

export default CloudTown;