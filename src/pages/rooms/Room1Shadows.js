import React, { Fragment, useEffect, useState } from 'react';

import Window from '../windows/Window';
import BlindsUp from '../windows/coverings/BlindsUp';

export const Room1Shadows = () => {
    const getColor = () => {
        const h = (Math.random() * 360).toFixed(0);

        return {h, s: 60, l: 0}
    }

    const [light , toggleBlinds] = useState(false);
    const [color, setColor] = useState(null)

    useEffect(() => {
        setColor(getColor())
    }, [])

    useEffect(() => {
        setColor(prev => (
            {h: prev.h, s: prev.s, l: prev.l + (light ? 10 : -5)}
        ))
    }, [light])

    if (!color) {
        return null;
    } else {
        const floor = `hsl(${color.h - 20}deg, ${color.s * 0.8}%, ${color.l * 0.5}%)`;
        return (
            <Fragment>
                <div className='ceiling' style={{background: floor}}>
                </div>
                <div className='rooms'>
                    <div className='wall'
                    style={{display: 'flex', 
                        flexDirection: 'row', 
                        height: 500,
                        transform: 'rotate3d(0, 1, 0, -20deg)',
                        backgroundColor: `hsl(${color.h}deg, ${color.s}%, ${color.l}%)`,
                        }}
                        >
                        <div style={{position: 'relative', width: '100%', maxWidth: 700, margin: '0 auto', height: '100%', }}>
                            <Window width={50}
                                widthUnits={'%'}
                                height={'100%'}
                                maxWidth={100}
                                maxWidthUnits='%'
                                >
                                <BlindsUp toggle={toggleBlinds}/>
                            </Window>
                        </div>
                    </div>
                    <div className='wall shadow' style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: '-57%',
                        top: 0,
                        transform: 'rotate3d(0, 1, 0, 70deg)',
                        backgroundColor: `hsl(${color.h}deg, ${color.s}%, ${color.l * 0.7}%)`,
                    }}>
                    
                    </div>
                    <div className='floor' style={{
                        width: '100%',
                        position: 'absolute',
                        height: '100vh',
                        transform: 'rotateX(90deg) rotateZ(20deg)',
                        transformOrigin: 'top center',
                        backgroundColor: floor,
                        
                    }}>
                        <div className={`sun-spot ${light ? '' : 'shadows'}`}>
                            <div
                                style={{
                                backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0) 50%, ${floor} 50%)`,
                            }}>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Room1Shadows;