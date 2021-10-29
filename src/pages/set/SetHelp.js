import React from 'react';
import { getFormattedTime } from './_set-util';

export default (props) => {
    return (
        <div className='set-help'>
            <div>
                {props.sets.length > 0 ?
                    <button onClick={() => props.toggleShowSets()} className='set-help__toggle-possible'>
                        {`${props.showPossibleSets ? 'hide' : 'show'} ${props.sets.length} possible ${props.sets.length > 1 ? 'sets': 'set'}`}
                    </button>
                    :
                    null
                }
                <p style={{width: 80}}>
                    {getFormattedTime(props.timer)}
                </p>
            </div>
            <div className='set-help__score'>
                <p>
                    {props.found.length} {props.found.length !== 1 ? 'sets': 'set'} found, {props.remainingCards.length} cards remaining
                </p>
                {props.wrong > 0 &&
                    <p className='set-help__score-wrong'>
                        {props.wrong} wrong
                    </p>
                }
            </div>
            <div className='set-help__reset'>
                <button onClick={() => props.resetGame()}>
                    new game
                </button>
                <a href="/#/set">
                    more info
                </a>
            </div>
        </div>
    )
}