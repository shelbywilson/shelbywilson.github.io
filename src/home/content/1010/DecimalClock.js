import React, { useEffect, useState } from 'react';

export const DecimalClock = () => {
    const [time, setTime] = useState({})
    const [decimalTime, setDecimalTime] = useState({})

    useEffect(() => {
        getTime();
        getDecimalTime();

        let interval1 = setInterval(() => getTime(), 1000)
        let interval2 = setInterval(() => getDecimalTime(), 864)

        return () => {
            clearInterval(interval1);
            clearInterval(interval2)
          }
    }, [])

    const getTime = () => {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();

        setTime({
            hour, 
            minute,
            second,
        })
    }

    const getDecimalTime = () => {
        const now = new Date();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();

        let decimal = (((hour * 60 + minute) * 60) + second) / ((24 * 60 * 60) * 10);
        const decimalHour = Math.floor(decimal * 100);
        decimal *= 100;
        decimal -= decimalHour;
        const decimalMinute = Math.floor(decimal * 100);
        decimal *= 100;
        decimal -= decimalMinute;
        const decimalSecond = Math.floor(decimal * 100);

        setDecimalTime({
            hour: decimalHour,
            minute: decimalMinute,
            second: decimalSecond,
        })
    }
    const getSections = (number, type, state) => {
        let items = [];
        let i = 0;

        while (i < number) {
            items.push(
                <div key={i} className={i === state[type] ? 'active' : ''}>
                </div>
            )
            i += 1;
        }
        return items;
    }

    const pad = (num) => {
        if (num < 10) {
            return `0${num}`;
        }
        return num;
    }

    return (
        <div className='decimal-clock'>
            <div className='hour'>
                {getSections(24, 'hour', time)}
            </div>
            <div className='minute'>
                {getSections(60, 'minute', time)}
            </div>
            <div className='second'>
                {getSections(60, 'second', time)}
            </div>
            <div className='hour-decimal'>
                {getSections(10, 'hour', decimalTime)}
            </div>
            <div className='minute-decimal'>
                {getSections(100, 'minute', decimalTime)}
            </div>
            <div className='second-decimal'>
                {getSections(100, 'second', decimalTime)}
            </div>
            <p style={{display: 'flex', justifyContent: 'center'}}>
                <span style={{width: 100, display: 'inline-block', textAlign: 'right'}}>
                    {pad(time.hour)}:{pad(time.minute)}.{pad(time.second)}
                </span> 
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <span style={{width: 100, display: 'inline-block', textAlign: 'left'}}>
                    {pad(decimalTime.hour)}:{pad(decimalTime.minute)}.{pad(decimalTime.second)}
                </span>
            </p>
        </div>
    )
}

export default DecimalClock;