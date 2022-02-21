import React, { useEffect, useState, useLayoutEffect } from 'react';
var randomWords = require('random-words');

const getNewWords = () => {
    let words = randomWords({min: 2, max: 5}).filter(word => word !== 'slave' && word !== 'policeman' && word !== 'military' && word !== 'army' && word !== 'soldier');

    if (words.length < 2) {
        words = getNewWords();
    }

    return words
}

const shuffledWords = (array) => {
    let curId = array.length;
    while (0 !== curId) {
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    let str = '';
    array.forEach(letter => str += letter)

    return str;
  }

export const FallingLetters = () => {
    const [jumble, setJumble] = useState(true)
    const [words, setWords] = useState(getNewWords())
    const [buttonLabel, setButtonLabel] = useState(getNewWords())

    const setNewWords = () => {
        setWords(buttonLabel);
        setButtonLabel(getNewWords())
    }

    useEffect(() => {
        const array = [];
        words.forEach(word => {
            word.split('').forEach(letter => {
                array.push(letter)
            })
            array.push(' ')
        })

        document.querySelector("title").innerText = shuffledWords(array);
    }, [words])

    useLayoutEffect(() => {
        return () => {
            document.querySelector("title").innerText = "Shelby Wilson";
        }
    }, [])

    let width = 0;
    let letterPosition = [];
    words.forEach((word, j) => {
        letterPosition.push([])
        word.split('').forEach(letter => {
            const size = letter === 'i' || letter === 'l' ? 0.7
                : letter === 'j' || letter === 't' || letter === 'f' || letter === 'r' ? 0.8 
                    : letter === 'm' || letter === 'w' ? 1.6 
                : 1.2;
            letterPosition[j].push(width)
            width += size * 8;
        })
        if (j < words.length - 1) {
            width += 12;
        }
    })

    const adjustedWidth = Math.max(180, width + (24 * 2))
    const placeholder = () => {
        let x = '';
        words.forEach(word => x += word + ' ')
        return x;
    }

    return (
        <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <div style={{marginBottom: '20vh', padding: '1rem'}}>
                <input type='text' 
                    onBlur={e => {
                        if (e.target.value.trim().length > 0) {
                            setWords(e.target.value.split(' '))
                        }
                        e.target.value = '';
                    }} 
                    className='w-100'
                    style={{maxWidth: 200, marginLeft: 'auto', border: '1px solid #000', padding: '0.5rem', display: 'block'}}
                    placeholder={placeholder()} />
                <div className='d-flex flex-row justify-between' style={{marginTop: '1.5rem'}}>
                    <button type='button'
                        style={{border: '1px solid black', borderRadius: '100%', padding: '1rem', width: 100, textAlign: 'center', color: '#000'}}
                        onClick={() => setJumble(prev => !prev)}>
                            {jumble ? 'unjumble' : 'jumble'}
                        </button>
                    <button type='button'
                        style={{border: '1px solid black', borderRadius: '100%', padding: '1rem 1.25rem', color: '#000'}}
                        onClick={setNewWords}>
                            {buttonLabel.map(word => <span key={word}>{word}&nbsp;</span>)}
                        </button>
                </div>
            </div>
            <svg viewBox={`${Math.min(0, (adjustedWidth - (width + (24 * 2))) * -0.5)} 0 ${adjustedWidth} ${adjustedWidth/2}`} 
                onMouseEnter={() => setJumble(prev => !prev)}
                onMouseLeave={() => setJumble(prev => !prev)}
                >
                <g style={{transform:"translate(24px, 16px)"}}>
                    {words.map((word, j) => {
                        return (
                            <React.Fragment key={`${word}_${j}`}>
                                {word.split('').map((letter,i) => {
                                    return (
                                        <g key={`${letter}_${i}`} 
                                            style={{
                                                transform: jumble ? `translate(${width/2 + (adjustedWidth/4 * (Math.random() - 0.5))}px, ${10 + (Math.random() * 30)}px) rotate(${(Math.random() * 90) - 45}deg)` : `translate(${letterPosition[j][i]}px, 0) rotate(0)`,
                                                transition: `transform ${200 + (Math.random() * 500)}ms`,
                                                transitionDelay: Math.random() * 500 + 'ms',
                                            }}>
                                            <text>
                                                {letter}
                                            </text>
                                        </g>
                                    )
                                })}
                            </React.Fragment>
                        )
                    })}
                </g>
            </svg>
        </div>
    )
}

export default FallingLetters;