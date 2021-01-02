import React, { useState, useEffect } from 'react';

export default (props) => {
    const { onHover } = props;

    const position = () => (
        Math.random() * 100
    )

    const [state, setState] = useState({
        width: Math.round(Math.random() * window.innerWidth/10) + 120,
        height: Math.round(Math.random() * window.innerHeight/6) + 250,
        transition: false,
        bgPos: Array.apply(null, Array(10)).map(() => position()),
        img: props.img,
    })
    const { width, height, bgPos, transition, img } = state;

    const handleHover = (isHover) => {
        if (!state.transition) {
            onHover(isHover);
        }
    }

    useEffect(() => {
        if (props.img !== state.img) {
            const delay = Math.random() * 500;

            setState({
                ...state, 
                transition: true,
            })
            
            setTimeout(() => {
                setState({
                    ...state, 
                    img: props.img,
                    transition: false,
                })
            },1200 + delay)
        }
    }, [props.img]);

    const rotateY = {
        back: 180,
        right: 90,
        front: 0,
        left: -90,
    }
    const rotateZ = {
        top: 90,
    }

    const rotateX = {
        top: 90,
    }

    const getStyle = (face, i) => ({
        height: face === 'top' ? width : transition ? 0 : height, 
        width, 
        backgroundImage: img,
        transform: `rotateY(${rotateY[face] || 0}deg) rotateX(${rotateX[face] || 0}deg) rotate(${rotateZ[face] || 0}deg) translateZ(${width/2}px)`,
        backgroundPosition: `${bgPos[i * 2]}% ${bgPos[(i * 2) + 1]}%`,
    })

    return (
        <div className={`cloud-block${transition ? '--locked' : ''}`}
            style={{width, height}} 
            onMouseEnter={() => handleHover(true)} 
            onMouseLeave={() => handleHover(false)}
            > 
            <div className='cube' style={{ transform: `rotateX(-15deg) rotateY(60deg) ${transition ? 'translateY(100%)' : ''}` }}>
                <div className='cube-label' style={{left: width/4 + 20, opacity: transition ? 0 : 1}}>
                    <div className='cube-label-circle'></div>
                </div>
                {['back', 'right', 'front', 'left', 'top'].map((face, i) => 
                    <div key={face} style={getStyle(face,i)} className={`cube__face cube__face--${face}`}></div>
                )}
            </div>
        </div>
    )
}