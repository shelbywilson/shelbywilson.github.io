import React, { useState, useEffect } from 'react';
import Digits from './Digits';

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
            <input type="text" 
                className="w-100"
                style={{padding: 10}}
                onChange={(e) => setValue(e.target.value.replace(/\D/g,''))}
                placeholder="Type any number"
                value={value}
                />
            <div className="d-flex flex-row flex-wrap" style={{margin: '2rem 0'}}>
                {numerals(value)}
            </div>
        </div>
    )
}