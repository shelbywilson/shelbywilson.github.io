import React, { Fragment, useEffect, useState } from 'react';

import Window from '../windows/Window';
import BlindsUp from '../windows/coverings/BlindsUp';

export default () => {
    const getColor = () => {
        const h = (Math.random() * 360).toFixed(0);
        // const s = //(Math.random() * 90).toFixed(0);

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

    // const hC = (Math.random() * 360).toFixed(0);
    // const sC = (Math.random() * 100).toFixed(0);
    // const lC = (Math.random() * 100).toFixed(0);

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
                        // color: `hsl(${hC}deg, ${sC}%, ${lC}%)`,
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
                        {/* <div style={{position: 'relative', width: '50%'}}>
                            <Window width={200}
                                height={'100%'}
                                maxWidth={100}
                                maxWidthUnits='%'
                                >
                                <GlassUp />
                            </Window>
                        </div> */}
                    </div>
                    <div className='wall shadow' style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        left: '-57%',
                        top: 0,
                        transform: 'rotate3d(0, 1, 0, 70deg)',
                        backgroundColor: `hsl(${color.h}deg, ${color.s}%, ${color.l * 0.7}%)`,
                        // color: `hsl(${hC}deg, ${sC}%, ${lC}%)`,
                    }}>
                    
                    </div>
                    <div className='floor' style={{
                        // background: 'white',
                        width: '100%',
                        position: 'absolute',
                        height: '100vh',
                        transform: 'rotateX(90deg) rotateZ(20deg)',
                        transformOrigin: 'top center',
                        backgroundColor: floor,
                        // color: `hsl(${h}deg, ${s}%, ${l}%)`,
                        // backgroundImage: 'radial-gradient(circle, rgb(5 37 28) 17px, rgb(239 255 45 / 0%) 11px)',
                        // backgroundSize: '40px 40px',
                        // backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px),linear-gradient(to right, currentColor 1px, transparent 1px)',
                        // backgroundSize: '25px 25px',
                        
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