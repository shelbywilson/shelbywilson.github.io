import React, { Fragment, useEffect, useState } from 'react';

import Window from '../windows/Window';
import BlindsUp from '../windows/coverings/BlindsUp';

export default () => {
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

            <div style={{
                perspective: '1014px',
                transformStyle: 'preserve-3d',
                position: 'relative',
            }}>
                <div style={{display: 'flex', 
                    flexDirection: 'row', 
                    padding: '40px 20px 80px 20px', 
                    backgroundColor: 'rgb(121 78 0)', 
                    backgroundSize: '30px 30px',
                    transform: 'rotate3d(0, 1, 0, -45deg)',
                    backgroundImage: 'radial-gradient(circle, rgb(179 179 255) 1px, rgba(0, 0, 0, 0) 1px)'}}>
                    <div style={{position: 'relative', width: '100%', height: 450, }}>
                        <Window width={50}
                            widthUnits={'%'}
                            height={'100%'}
                            maxWidth={100}
                            maxWidthUnits='%'
                            >
                            <BlindsUp />
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
                <div style={{
                    padding: '40px 20px 80px 20px', 
                    backgroundColor: 'rgb(121 78 0)', 
                    backgroundSize: '30px 30px',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: '-70%',
                    top: 0,
                    transform: 'rotate3d(0, 1, 0, 45deg)',
                    backgroundImage: 'radial-gradient(circle, rgb(179 179 255) 1px, rgba(0, 0, 0, 0) 1px)'}}>
                
                </div>
                <div style={{
                    background: 'white',
                    width: '100%',
                    position: 'absolute',
                    height: '100%',
                    transform: 'rotateX(90deg) rotateZ(45deg)',
                    transformOrigin: 'top center',
                    // backgroundImage: 'radial-gradient(circle, rgb(5 37 28) 17px, rgb(239 255 45 / 0%) 11px)',
                    // backgroundSize: '40px 40px',
                    backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px),linear-gradient(to right, currentColor 1px, transparent 1px)',
                    backgroundSize: '25px 25px',
                }}>

                </div>
            </div>
            </Fragment>
        )
    }
}