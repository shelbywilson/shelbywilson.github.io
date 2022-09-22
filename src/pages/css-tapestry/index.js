import React, { useState, useEffect } from 'react';
import { getRandomColor } from '../sketches/2022-01-05/Section';

export const CSSTapestry = () => {
    const [next, setNext] = useState({});
    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(getRows())
    }, [])

    function getRows() {
        const numRow = Math.ceil(Math.random() * 20) + 4;
        let r = [getRow({elements: 10})];

        while (r.length < numRow) {
            r.unshift(getRow(r[0]))
        }

        return r;
    }

    useEffect(() => {
        if (rows.length > 0) {
            setNext(getRow(rows[0]))
        }
    }, [rows])

    const justifyOptions = ['center', 'space-between', 'space-around']

    function getRow(prev) {
        const height = 30 + (Math.floor(Math.random() * 100));
        const width = 4 + (Math.floor(Math.random() * 14));
        const elements = prev.elements * prev.width < 85 ? prev.elements + 1 : prev.elements - 2;
        const background = Math.random() > 0.7 ?
            Math.random() > 0.5 ?
                `radial-gradient(${getRandomColor()}, ${getRandomColor()})`
                : 
                `linear-gradient(${Math.floor(Math.random() * 360)}deg, ${getRandomColor()}, ${getRandomColor()})`
            :
            getRandomColor();

        return {
            backgroundColor: background.indexOf('gradient') > -1 ? null : background,
            backgroundImage: background.indexOf('gradient') > -1 ? background : null,
            // backgroundSize: (1/Math.ceil(Math.random() * 5) * 100) + "%",
            elements,
            borderRadius: Math.random() > 0.35 ? Math.floor(Math.random() * 100) : 0,
            width,
            height,
            rowBackground: getRandomColor(),
            rowPadding: Math.floor(Math.random() * 30),
            // margin: `0 0 ${100 - (prev.width * prev.elements) > 20 ? -prev.height/3 : 0}px 0`,
            justify: justifyOptions[Math.floor(Math.random() * justifyOptions.length)],
            // boxShadow: Math.random() > 0.9 ? `0 0 20px ${getRandomColor()}` : null,
        }
    }

    const addRow = () => {
        setRows(prev => [next, ...prev])
    }

    const getElements = (row) => {
        let elements = [];

        while (elements.length < row.elements) {
            elements.push(
                <div key={elements.length} style={{background: row.rowBackground, width: `${row.width * 10}px`}}>
                    <div style={{...row, width: 'auto'}}>
                    </div>
                </div>
            )
        }

        return elements;
    }

    return (
        <div>  
            <div className="d-flex align-items-center"
                style={{position: 'fixed', right: 20, top: 20, width: '15%', maxWidth: 100, height: 100}}>
                <button type="button" 
                    style={{...next, width: `${next.width * 10}px`, color: '#fff', margin: '0 auto'}}
                    onClick={() => addRow(rows[0])}>
                    add
                </button>    
            </div> 
            <div style={{margin: '1rem 0'}}>
                {rows.map((row, i) => (
                    <div key={i} 
                        style={{justifyContent: row.justify, maxWidth: '100%', background: row.justify !== 'start' && row.justify !== 'end' ? row.rowBackground : null, padding: row.rowPadding}} 
                        className='d-flex flex-row'>
                        {getElements(row)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CSSTapestry;