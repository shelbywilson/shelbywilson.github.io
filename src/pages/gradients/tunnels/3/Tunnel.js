import React, { useEffect, useState } from 'react';

import './_tunnel.scss';

const getRandomRGB = () => {
    return {
        r: Math.floor(Math.random() * 256), 
        b: Math.floor(Math.random() * 256), 
        g: Math.floor(Math.random() * 256)
    };
}

export const Gradients = () => {
    const [state, setState] = useState({
        base: getRandomRGB(),
        opacity: 1,
        interval: 32000,
        timer: 100,
    })

    const [layers, setLayers] = useState([
        getRandomRGB(), 
    ])

    const changeAll = () => {
        // setState(prev => ({
        //     ...prev,
        //     opacity: prev.opacity === 1 ? 0 : 1,
        //     base: getRandomRGB(),
        // }));

        setLayers(prev => (
            [...prev, prev.length % 2 ? {r:0,b:0,g:0} : getRandomRGB()]
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
        if (state.timer % (state.interval/8) === 0) {
            changeAll();
        } 
        // else if (state.timer % state.interval/2 === 0) {
            // setState(prev => ({
            //     ...prev,
            //     base: getRandomRGB(),
            // }));
        // }
    }, [state.timer])

    const getStyle = (layer, color, toWhite) => ({
        background: `radial-gradient(ellipse at 50% 50%, rgb(${color.r},${color.g},${color.b}) 0%, rgba(255,255,255,${toWhite ? '0.95' : '0'}) 50%)`,
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
                        return i > layers.length - (state.interval/1000 * 0.6) ? 
                            <div key={`layer_${i + 1}`} className={`gradients-layer tunnel`} style={{...getStyle(i, color)}}>
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