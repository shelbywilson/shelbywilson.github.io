import React from 'react';
import * as Fraction from 'fractional';

export const DecimalToFraction = ({ decimal, svg }) => {
    const negative = decimal < 0;
    decimal = Math.abs(decimal);
    const remainder = Math.abs(Math.floor(decimal) - decimal);
    const wholeValue = Math.floor(decimal);

    if (svg) {
        return (
            <text className='default-font' style={{fontSize: '0.75rem'}}>
                <tspan>
                    {negative && '-'}{wholeValue !== 0 || remainder === 0 ? wholeValue : ''}
                </tspan>
                {remainder !== 0 &&
                    <React.Fragment>
                        <tspan style={{fontSize: '0.825em'}} dy="-2" dx="3">
                            {new Fraction.Fraction(remainder).numerator}
                        </tspan>
                        <tspan dy="2">/</tspan>
                        <tspan style={{fontSize: '0.825em'}} dy="2">
                            {new Fraction.Fraction(remainder).denominator}
                        </tspan>
                    </React.Fragment>
                }
                <tspan dy="-2">"</tspan>
            </text>
        )
    }
    return (
        <span className='default-font' style={{fontSize: '0.75rem'}}>
            <span>
                {negative && '-'}{wholeValue !== 0 || remainder === 0 ? wholeValue : ''}
            </span>
            {remainder !== 0 &&
                <React.Fragment>
                    <sup style={{fontSize: '0.825em', marginLeft: 2}}>
                        {new Fraction.Fraction(remainder).numerator}
                    </sup>
                    <span>/</span>
                    <sub style={{fontSize: '0.825em'}}>
                        {new Fraction.Fraction(remainder).denominator}
                    </sub>
                </React.Fragment>
            }
            <span>"</span>
        </span>
    )
}

export default DecimalToFraction;