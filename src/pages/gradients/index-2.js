import React, { useEffect, useState, Fragment } from 'react';

import './_gradients.scss';

const getRandomRGB = (max = 256) => {
    return {
        r: Math.floor(Math.random() * max), 
        b: Math.floor(Math.random() * max), 
        g: Math.floor(Math.random() * max)
    };
}

const interval = 8000;

export const InteractiveGradients = () => {
    const [state, setState] = useState({
        base: getRandomRGB(180),
        timer: 100,
    })

    const [layers, setLayers] = useState([])

    useEffect(() => {
        let id = setInterval(() => {
            setState(prev => {
                const time = prev.timer += 100;
                return {
                    ...prev, 
                    timer: time,
                    base: time % interval === 0 ? getRandomRGB() : prev.base,
                }
            });
          }, 100);
          return () => clearInterval(id);
    }, [])

    const getStyle = (layer, color, toWhite) => ({
        background: layer === 'base' ?
            `rgb(${color.r},${color.g},${color.b})`
            :
            `radial-gradient(ellipse at ${layer.coord[0]}px ${layer.coord[1]}px, rgb(${color.r},${color.g},${color.b}) 0%, rgba(255,255,255,${toWhite ? '0.95' : '0'}) ${Math.max(window.innerWidth * 0.8, 300)}px)`,
    })

    const addLayer = (e) => {
        const target = e.target;

        const rect = target.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setLayers((prev) => (
            [...prev, {time: state.timer, coord: [x, y], color: getRandomRGB()}]
        ))
    }
    const handleKeyDown = (event) => {
        if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
            event.preventDefault();
            const x = window.innerWidth * Math.random();
            const y = window.innerHeight * Math.random();

            setLayers((prev) => (
                [...prev, {time: state.timer, coord: [x, y], color: getRandomRGB()}]
            ))
        }
      }
    
    return (
        <Fragment>
            <div className='gradients' 
                onClick={addLayer}
                tabIndex="0" 
                role="button"
                onKeyDown={handleKeyDown}
                >

                <div className='gradients-layer gradients-layer-base' style={{...getStyle('base', state.base)}}>
                </div>

                {layers.map(layer => {
                    if (state.timer < layer.time + (interval * 3)) {
                        return (
                            <div key={`layer_${layer.time}`} className='gradients-layer animate' style={{...getStyle(layer, layer.color)}}>
                            </div>
                        )
                    } 
                    return null;
                })}
            </div>
            <h5 className='gradients-helper-text' style={{opacity: layers.length > 0 ? 0 : 1}}>
                click anywhere  : )
            </h5>
        </Fragment>
    )
}

export default InteractiveGradients;