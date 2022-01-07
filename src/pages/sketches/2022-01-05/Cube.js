import React from 'react';

export const Cube = ({ colors, preserveAspectRatio }) => {
    const getPoints = (i) => {
        switch(i) {
            case 0: 
                return '0,25 50,0 100,25 50,50'
            case 1: 
                return '0,25 0,75 50,100 50,50'
            case 2: 
                return '100,25 100,75 50,100, 50,50'
            default:
                return '';
        }
    }

    return (
        <svg viewBox='0 0 100 100' 
            className="twenty-one-cubes-cube"
            preserveAspectRatio={preserveAspectRatio ? 'xMidYMid meet' : 'none'}
            >
            {colors.map((side, i) => (
                <polygon key={i}
                    points={getPoints(i)}
                    style={{
                        fill: side, 
                        transition: 'all 1000ms',
                    }}>
                </polygon>
            ))} 
        </svg>
    )
}

export default Cube;