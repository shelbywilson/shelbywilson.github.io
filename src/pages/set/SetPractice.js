import React, { useState, useEffect } from 'react';
import SetCard from "./SetCard";
import { isSet, getCards, getNeededCard, colors, shape, shading, attrs, namedAttr } from './_set-util';

export const SetPractice = () => {
    const [example, setExample] = useState([])
    const [guess, setGuess] = useState(null)
    const [count, setCount] = useState({right: 0, wrong: 0})

    useEffect(() => {
        reset()
    }, [])

    const reset = () => {
        let set = getCards().slice(0, 3)
        if (Math.random() > 0.5) {
            setExample(set); 
        } else {
            set = set.slice(0, 2);
            setExample([...set, getNeededCard(set[0], set[1])])
        }
        setGuess(null);
    }

    const updateGuess = (val) => {
        setGuess(val)
        const result = val === isSet(example) ? 'right' : 'wrong';

        setCount((prev) => (
            {
                ...prev, 
                [result]: prev[result] + 1
            }
        ))
    }
    
    const explanation = () => {
        if (isSet(example)) {
            return `This is a set. Number of elements ${example[0].m === example[1].m ? `is the same (${example[0].m + 1})` : "is different for every card"}, color ${example[0].i === example[1].i ? `is the same (${colors[example[0].i]})` : "is different for every card"}, shading ${example[0].k === example[1].k ? ` is the same (${shading[example[0].k]})` : "is different for every card"}, shape ${example[0].j === example[1].j ? `is the same (${shape[example[0].j]})` : "is different for every card"}.`
        }

        let mismatch = {};
        const a = example[0];
        const b = example[1];
        const c = example[2];
        for (let i = 0; i < attrs.length; i += 1) {
            let attr = attrs[i];
            if (a[attr] === b[attr] && b[attr] === c[attr] && a[attr] === c[attr]) {
                // all same
            } else if (a[attr] !== b[attr] && a[attr] !== c[attr] && b[attr] !== c[attr]) {
                // all different
            } else {
                mismatch[attr] = {};
                [a, b, c].forEach(card => {
                    mismatch[attr][card[attr]] = (mismatch[attr][card[attr]] ?? 0) + 1
                })
            }
        }

        let explanation = `This is not a set.`

        Object.keys(mismatch).forEach((key, i) => {
            explanation += ` ${i === 0 ? namedAttr[key].slice(0, 1).toUpperCase() + namedAttr[key].slice(1) : namedAttr[key]}`;
            if (i === Object.keys(mismatch).length - 2) {
                explanation += ' and'
            } else if (i < Object.keys(mismatch).length - 2) {
                explanation += ', '
            }
        })

        explanation += ` ${Object.keys(mismatch).length === 1 ? 'does' : 'do'} not meet the criteria.`;

        return explanation
    }

    const totalGuesses = count.right + count.wrong;

    return (
        <div className="set-practice">
            <p>
                Given these rules, is this a set?
            </p>
            <div className="d-flex flex-row justify-center example-set">
                {example.map((card) => (
                    <SetCard key={`card-${card.i}-${card.j}-${card.k}-${card.m}`}
                        card={card} />
                ))}
            </div>
            <p className="d-flex flex-row justify-center">
                <button disabled={guess !== null} 
                    data-selected={guess === true} 
                    data-correct={isSet(example)}
                    onClick={() => updateGuess(true)}>yes</button>
                <button disabled={guess !== null} 
                    data-selected={guess === false} 
                    data-correct={!isSet(example)}
                    onClick={() => updateGuess(false)}>no</button>
                {guess !== null && <button onClick={reset}>try another</button>}
            </p>
            {guess !== null &&
                <div>
                    {guess === isSet(example) ?
                        <p>
                            Right! <span style={{fontFamily: "monospace", color: 'rgb(71, 236, 68)'}}>&#10003;</span> {explanation()}
                        </p>
                        :
                        <p>
                            Wrong <span style={{color: 'rgb(255, 69, 0)'}}>&#215;</span> {explanation()}
                        </p>
                    }
                </div>
            }

            <div className='d-flex flex-row' style={{margin: '2rem 0', borderRadius: '20px', overflow: 'hidden'}}>
                <div style={{height: '1rem', transition: 'width 500ms', background: 'var(--green)', width: `${totalGuesses > 0 ? (count.right / totalGuesses * 100) : 50}%`}}>
                </div>
                <div style={{height: '1rem', transition: 'width 500ms', background: 'var(--red)', width: `${totalGuesses > 0 ? (count.wrong / totalGuesses * 100) : 50}%`}}>
                </div>
            </div>
            {/* <div style={{marginTop: '1rem'}}>
                <div className="d-flex flex-row">
                    <p style={{flex: '0 0 100px'}}>Correct</p>
                    <p style={{flex: '0 0 50px'}}>{count.right}</p>
                    <div className='d-flex align-items-center' style={{flex: '1 1 auto'}}>
                        <div style={{height: '1rem', transition: 'width 300ms', background: 'var(--green)', width: `${totalGuesses > 0 ? (count.right / totalGuesses * 100) : 0}%`}}>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <p style={{flex: '0 0 100px'}}>Incorrect</p>
                    <p style={{flex: '0 0 50px'}}>{count.wrong}</p>
                    <div className='d-flex align-items-center' style={{flex: '1 1 auto'}}>
                        <div style={{height: '1rem', transition: 'width 300ms', background: 'var(--red)', width: `${totalGuesses > 0 ? (count.wrong / totalGuesses * 100) : 0}%`}}>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default SetPractice;