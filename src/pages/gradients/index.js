import React, { useEffect, useState, Fragment } from 'react';

import './_gradients.scss';
import Explanation from './Explanation';

const getRandomRGB = () => {
    return {
        r: Math.floor(Math.random() * 256), 
        b: Math.floor(Math.random() * 256), 
        g: Math.floor(Math.random() * 256)
    };
}

export default ({explain, children}) => {
    const [state, setState] = useState({
        base: getRandomRGB(),
        opacity: 1,
        auto: true,
        interval: 8000,
        timer: 100,
    })

    const [layers, setLayers] = useState([
        getRandomRGB(), 
        getRandomRGB(), 
        getRandomRGB(), 
        getRandomRGB(),
        getRandomRGB(), 
        getRandomRGB(),
    ])

    const changeAll = () => {
        setState(prev => ({
            ...prev,
            opacity: prev.opacity === 1 ? 0 : 1,
            base: getRandomRGB(),
        }));

        setLayers(prev => (
            prev.map((layer,i) => {
                if ((i + state.opacity) % 2 === 1) {
                    return getRandomRGB();
                }
                return layer;
            }))
        )
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
        if (state.timer % state.interval === 0 && state.auto) {
            changeAll();
        } else if (state.timer % state.interval/2 === 0 && state.auto) {
            setState(prev => ({
                ...prev,
                base: getRandomRGB(),
            }));
        }
    }, [state.timer])

    const getStyle = (layer, color, toWhite) => ({
        background: layer === 'base' ?
            `rgb(${state.base.r},${state.base.g},${state.base.b})`
            :
            `radial-gradient(ellipse at ${((color.r + color.g)/510) * 110 - 0.1}% ${(((color.b)/255) * 110 - 0.1)}%, rgb(${color.r},${color.g},${color.b}) 0%, rgba(255,255,255,${toWhite ? '0.95' : '0'}) 80%)`,
        transition: layer === 'base' ?
            `background ${state.interval/2}ms` 
            : 
            `opacity ${state.interval}ms`,
        opacity: layer === 'base' ? 
            1 
            : 
            (layer + state.opacity + 1) % 2,
    })
    
    return (
        <Fragment>
            <div className='gradients' 
                >
                {layers.map((color, i) => 
                    <div key={`layer_${i + 1}`} className='gradients-layer' style={{...getStyle(i, color), zIndex: 100 - i}}>
                    </div>
                )}

                <div className='gradients-layer' style={{...getStyle('base'), zIndex: 5}}>
                </div>
            </div>

            {children}

            {explain &&
                <Explanation layers={layers}
                    state={state}
                    getStyle={getStyle}
                    />
            }
        </Fragment>
    )
}