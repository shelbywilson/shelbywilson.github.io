import React, { useState, useEffect } from 'react';
import { Cube } from './Cube';

const getRandomColor = () => `rgb(${255 * Math.random()},${255 * Math.random()},${255 * Math.random()})`
// const getRandomColor = () => `hsl(${Math.floor(361 * Math.random())},${100 * Math.random()}%,${100 * Math.random()}%)`

export const Section = ({ section, orientation, preserveAspectRatio }) => {
    const [bg, setBG] = useState(getRandomColor());
    const [fill, setFill] = useState([getRandomColor(), getRandomColor(), getRandomColor()])

    const setColors = () => {
        setBG(getRandomColor())
        setFill([0,1,2].map(() => getRandomColor()))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setColors()
        }, 20000 * Math.random() + 2000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div className={`split-section d-flex flex-${orientation}`} 
            style={{
                width: section.w + '%', 
                height: section.h + '%', 
                background: bg,
                transition: 'all 1000ms'
                }}>
            {section.boxes.length > 0 ?
                section.boxes.map((child, i) => (
                    <Section key={i}
                        preserveAspectRatio={preserveAspectRatio}
                        section={child}
                        orientation={orientation === "row" ? "column" : "row"}
                        />
                ))
                :
                <Cube colors={fill} 
                    preserveAspectRatio={preserveAspectRatio}
                    />
            }
        </div>
    )
}

export default Section;