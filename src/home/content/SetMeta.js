import React from 'react';
import "./../../pages/set/partials/_variables.scss";
import "./../../pages/set/partials/_set-card.scss";
import "./../partials/_set-detail.scss";
import UsingList from '../../common/UsingList';
import SetPractice from '../../pages/set/SetPractice';
import { getTechnologies } from '../routes';

export const SetMeta = () => {
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
            <p className="mb-0">
                <a href='https://en.wikipedia.org/wiki/Set_(card_game)' target='_blank' rel="noreferrer">Set</a> is a card game in which each card has four properties:
            </p> 
            <ul className="mt-0">
                <li>color</li>
                <li>shape</li>
                <li>shading</li>
                <li>number of elements</li>
            </ul> 
            <p>
                A 'set' is created by finding three cards that are either all the same or all different for each property. In a deck of 81 card, this means there are 1080 unique sets.
            </p>

            <SetPractice />
            
            <UsingList list={getTechnologies('set')}
                />
        </div>
    )
}

export default SetMeta;