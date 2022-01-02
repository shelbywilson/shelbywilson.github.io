import React, { useState, useEffect } from 'react';
import SetCard from "./../../pages/set/SetCard";
import "./../../pages/set/partials/_variables.scss";
import "./../../pages/set/partials/_set-card.scss";
import "./../partials/_set-detail.scss";
import { isSet, getCards, getNeededCard, colors, shape, shading, attrs, namedAttr } from '../../pages/set/_set-util';

export const Set = () => {
    // const sets = [
    //     [
    //         {i: 2, j: 2, k: 0, m: 2}, 
    //         {i: 2, j: 1, k: 0, m: 2},
    //         {i: 2, j: 0, k: 0, m: 2},
    //     ],
    //     [
    //         {i: 0, j: 0, k: 1, m: 1}, 
    //         {i: 1, j: 0, k: 1, m: 1},
    //         {i: 1, j: 0, k: 1, m: 1},
    //     ],
    //     [
    //         {i: 0, j: 0, k: 1, m: 1}, 
    //         {i: 2, j: 0, k: 1, m: 1},
    //         {i: 1, j: 0, k: 1, m: 1},
    //     ],
    //     [
    //         {i: 1, j: 0, k: 1, m: 1}, 
    //         {i: 1, j: 0, k: 1, m: 1},
    //         {i: 1, j: 0, k: 0, m: 1},
    //     ],
    // ]

    const [example, setExample] = useState([])
    const [guess, setGuess] = useState(null)

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
    
    const explanation = () => {
        if (isSet(example)) {
            return `This is a set. Number of elements ${example[0].m === example[1].m ? `is the same (${example[0].m + 1})` : "is different for every card"}, color ${example[0].i === example[1].i ? `is the same (${colors[example[0].i].name})` : "is different for every card"}, shading ${example[0].k === example[1].k ? ` is the same (${shading[example[0].k]})` : "is different for every card"}, shape ${example[0].j === example[1].j ? `is the same (${shape[example[0].j]})` : "is different for every card"}.`
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

        explanation += ' do not meet the criteria.';

        return explanation
    }

    return (
        <div className="set-detail">
            <div style={{height: 340}}>
                <iframe src='/set?_no-header' 
                    style={{transform: 'scale(0.5)', transformOrigin: 'top left', height: '200%', width: '200%'}}
                    referrerPolicy='no-referrer' 
                    loading='lazy'></iframe>
            </div>
            <p>
                Play <a href='/set'>full screen</a>.
            </p>
            <p>
                <a href='https://en.wikipedia.org/wiki/Set_(card_game)' target='_blank' rel="noreferrer">Set</a> is a card game in which each card has four properties: color, shape, shading, and number of elements. A 'set' is created by finding three cards that are either all the same or all different for each property. 
            </p>

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
                    onClick={() => setGuess(true)}>yes</button>
                <button disabled={guess !== null} 
                    data-selected={guess === false} 
                    onClick={() => setGuess(false)}>no</button>
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
            {/* <div className="d-flex flex-row set-example-row">
                {sets[2].map((card, i) => (
                    <SetCard key={`card-${i}`}
                        card={card} />
                ))}
                <div className="set-example-row-explanation">
                    <p><span style={{fontFamily: "monospace"}}>&#10003;</span> each a different color</p>
                    <p><span style={{fontFamily: "monospace"}}>&#10003;</span> all circles</p>
                    <p><span style={{fontFamily: "monospace"}}>&#10003;</span> all shaded</p>
                    <p><span style={{fontFamily: "monospace"}}>&#10003;</span> all have 2 elements</p>
                </div>
            </div>
            <div className="d-flex flex-row set-example-row">
                {sets[0].map((card, i) => (
                    <SetCard key={`card-${i}`}
                        card={card} />
                ))}
                <div className="set-example-row-explanation">
                    <p><span style={{fontFamily: "monospace"}}>&#10003;</span> all purple</p>
                    <p><span style={{fontFamily: "monospace"}}>&#10003;</span> each a different shape</p>
                    <p><span style={{fontFamily: "monospace"}}>&#10003;</span> all solid</p>
                    <p><span style={{fontFamily: "monospace"}}>&#10003;</span> all have 3 elements</p>
                </div>
            </div>
            <p>
                These groups are not valid sets:
            </p>

            <div className="d-flex flex-row set-example-row">
                {sets[1].map((card, i) => (
                    <SetCard key={`card-${i}`}
                        card={card} />
                ))}
                <div className="set-example-row-explanation">
                    <p><span>&#215;</span> one red, two green</p>
                </div>
            </div>
            <div className="d-flex flex-row set-example-row">
                {sets[3].map((card, i) => (
                    <SetCard key={`card-${i}`}
                        card={card} />
                ))}
                <div className="set-example-row-explanation">
                    <p><span>&#215;</span> two shaded, one solid</p>
                </div>
            </div> */}
            <p>
                Using: React.js, SCSS
            </p>
        </div>
    )
}

export default Set;