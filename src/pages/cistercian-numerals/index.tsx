import React, { useState, useEffect, CSSProperties } from 'react';
import Digits from './Digits';

export const height = 80;
export const width = 50;
export const outline: CSSProperties = {stroke: "#000", strokeWidth: 2, strokeLinecap: "round"};

export default () => {
    const [value, setValue] = useState('');
    const [example, setExample] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setExample(prev => (prev + 1)%10000);
        }, 250)

        return () => clearInterval(interval)
    }, [])

    const numerals = (val: string) => {
        let i = 0;
        let groups = [];
        while (i < val.length) {
            groups.push(val.substring(i, i + 4))
            i += 4;
        }

        return groups.map((group, i) => (
            <Digits digits={group}
                key={`${group.toString() || i}-${i}`} 
                />
        ))
    }

    return (
        <div>
            <div className="d-flex flex-row flex-wrap justify-center">
                {numerals(example.toString().substring(0, 4))}
            </div>
            <div className="d-flex flex-row justify-center" style={{margin: "2rem 0 3rem 0"}}>
                <div style={{width: width + 2 + 140, height: height + 2, margin: "1rem"}}>
                    <svg className="w-100 h-100">
                        <g style={{transform: `translate(${70 + 1}px, 1px)`}}>
                            <g style={{transform: `translate(${width/2}px, 0)`}}>
                                <line x1="25" x2="50" y1={height/6} y2={height/6} style={{...outline}}></line>
                                <rect width={width/2} height={height/3} style={{strokeWidth: 2, stroke: "yellow", fill: "rgba(255,255,0,0.5)"}} />
                                <text style={{transform: `translate(50px, 17px)`, textAnchor: "start"}} className="text-small">1s</text>
                            </g>
                            <g style={{transform: `translate(0, 0)`}}>
                                <line x1="0" x2="-25" y1={height/6} y2={height/6} style={{...outline}}></line>
                                <rect width={width/2} height={height/3} style={{strokeWidth: 2, stroke: "red", fill: "rgba(255,0,0,0.5)"}} />
                                <text style={{transform: `translate(-30px, 17px)`, textAnchor: "end"}} className="text-small">10s</text>
                            </g>
                            <g style={{transform: `translate(${width/2}px, ${height * 2/3}px)`}}>
                                <line x1="25" x2="50" y1={height/6} y2={height/6} style={{...outline}}></line>
                                <rect width={width/2} height={height/3} style={{strokeWidth: 2, stroke: "green", fill: "rgb(0,255,0,0.5)"}} />
                                <text style={{transform: `translate(50px, 17px)`, textAnchor: "start"}} className="text-small">100s</text>
                            </g>
                            <g style={{transform: `translate(0, ${height * 2/3}px)`}}>
                                <line x1="0" x2="-25" y1={height/6} y2={height/6} style={{...outline}}></line>
                                <rect width={width/2} height={height/3} style={{strokeWidth: 2, stroke: "blue", fill: "rgba(0,0,255,0.5)"}} />
                                <text style={{transform: `translate(-30px, 17px)`, textAnchor: "end"}} className="text-small">1000s</text>
                            </g>
                            <line x1={width/2} x2={width/2} y1={0} y2={height} style={outline} />
                        </g>
                    </svg>
                </div>
            </div>

            <input type="number" 
                className="w-100 text-right"
                style={{padding: 10}}
                onChange={(e) => setValue(e.target.value.replace(/\D/g,''))}
                placeholder="Type any number"
                value={value}
                />
            <div className="d-flex flex-row flex-wrap justify-center" style={{margin: '2rem 0', minHeight: 154}}>
                {numerals(value)}
            </div>

            <div className="d-flex flex-row flex-wrap align-items-center justify-center">
                {numerals("1")}
                <span style={{marginTop: -20}}>+</span>
                {numerals("4")}
                <span style={{marginTop: -20}}>=</span>
                {numerals("5")}
            </div>
            <div className="d-flex flex-row flex-wrap align-items-center justify-center">
                {numerals("1")}
                <span style={{marginTop: -20}}>+</span>
                {numerals("6")}
                <span style={{marginTop: -20}}>=</span>
                {numerals("7")}
            </div>
            <div className="d-flex flex-row flex-wrap align-items-center justify-center">
                {numerals("2")}
                <span style={{marginTop: -20}}>+</span>
                {numerals("6")}
                <span style={{marginTop: -20}}>=</span>
                {numerals("8")}
            </div>
            <div className="d-flex flex-row flex-wrap align-items-center justify-center">
                {numerals("2")}
                <span style={{marginTop: -20}}>+</span>
                {numerals("7")}
                <span style={{marginTop: -20}}>=</span>
                {numerals("9")}
            </div>
        </div>
    )
}