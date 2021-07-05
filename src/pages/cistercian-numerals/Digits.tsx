import React, { FunctionComponent } from 'react';
import { width, height, outline } from '.';

interface DigitsProps {
    digits: string,
}

export const Digits: FunctionComponent<DigitsProps> = ({ digits }) => {
    return (
        <div style={{width: width + 2, height: height + 2 + 40, margin: "1rem"}}>
            <svg className="w-100 h-100">
                <g style={{transform: "translate(1px, 1px)"}}>
                    <line x1={width/2} x2={width/2} y1={0} y2={height} style={outline} />
                    <g style={{transform: `translate(${width/2}px, ${height/2}px)`}}>
                        {digits.split('').reverse().map((d, place) => {
                            let paths = [];
                            let digit = parseInt(d, 10);
                            if ([1, 5, 7, 9].indexOf(digit) > -1) {
                                paths.push( <line key={`line-1`} x1={0} x2={width/2} y1={0} style={outline}></line> )
                            }
                            if ([2, 8, 9].indexOf(digit) > -1) {
                                paths.push(<line key={`line-2`} x1={0} x2={width/2} y1={height/3} y2={height/3} style={outline}></line> )
                            }
                            if (digit > 5) {
                                paths.push(<line key={`line-3`} x1={width/2} x2={width/2} y1={0} y2={height/3} style={outline}></line> )
                            }

                            if (digit === 3) {
                                paths.push(<line key={`line-4`} x1={0} x2={width/2} y1={0} y2={height/3} style={outline}></line> )
                            } else if (digit === 4 || digit === 5) {
                                paths.push(<line key={`line-5`} x1={0} x2={width/2} y1={height/3} y2={0} style={outline}></line> )
                            }

                            return <g key={`${digit}-${place}`} style={{transform: `translate(0px, ${(height/2) * (place > 1 ? 1 : -1)}px) scaleX(${place%2 === 1 ? -1 : 1}) scaleY(${place > 1 ? -1 : 1})`}}>{paths}</g>;
                        })}
                    </g>
                </g>
                <g style={{transform: `translate(${width/2}px, ${height + 30}px)`}}>
                    <text style={{textAnchor: "middle"}}>
                        {digits.split('').map((digit, place) => (
                            <tspan key={`${digit}-${place}`}>
                                {digit}
                            </tspan>
                        ))}
                    </text>
                </g>
            </svg>
        </div>
    )
}

export default Digits;