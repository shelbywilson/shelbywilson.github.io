import React, { useEffect, useState } from 'react';

import './_tunnel.scss';

const getRandomRGB = () => {
    return {
        r: Math.floor(Math.random() * 256), 
        b: Math.floor(Math.random() * 256), 
        g: Math.floor(Math.random() * 256)
    };
}

const interval = 32000;

export const Gradients = () => {
    const [state, setState] = useState({
        timer: 100,
    })

    const [layers, setLayers] = useState([
        getRandomRGB(), 
    ])

    const changeAll = () => {

        setLayers(prev => (
            [...prev, getRandomRGB()]
        ))
    }

    useEffect(() => {
        let id = setInterval(() => {
            setState(prev => ({
                ...prev, 
                timer: prev.timer += 100
            }));
          }, 100);
          return () => clearInterval(id);
    }, [])

    useEffect(() => {
        if (state.timer % (interval/8) === 0) {
            changeAll();
        } 
    }, [state.timer])

    const getStyle = (layer, color, toWhite) => ({
        background: layer === 'base' ?
            `rgb(${state.base.r},${state.base.g},${state.base.b})`
            :
            `radial-gradient(ellipse at 50% 50%, rgb(${color.r},${color.g},${color.b}) 0%, rgba(255,255,255,${toWhite ? '0.95' : '0'}) 50%)`,
    })
    
    return (
            <div style={{background: '#000', width: '100%', height: '100%', position: 'absolute'}}>
                <div style={{
                    position: 'absolute', 
                    left: `calc(50% - ${800/2}px)`, 
                    top: `calc(50% - ${800/2}px)`, 
                    width: 800, 
                    height: 800, 
                    borderRadius: '100%',
                    overflow: 'hidden'}}>

                {/* <div className='gradients-layer' style={{...getStyle('base')}}>
                </div> */}
                <div className='gradients' 
                    >
                    {layers.map((color, i) => {
                        return i > layers.length - (interval/1000) ? 
                            <div key={`layer_${i + 1}`} className={`gradients-layer ${i > 0 ? 'tunnel' : ''}`} style={{...getStyle(i, color)}}>
                            </div>
                        :
                        null
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gradients;