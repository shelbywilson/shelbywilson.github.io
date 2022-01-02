import React from 'react';
import SetSquiggle from './SetSquiggle';
import { colors } from './_set-util';

export const SetCard = (props) => {
    const {
        card,
        toggleSelect,
        selected,
    } = props;

    // j – shape; 0 – circle, 1 – squiggle, 2 – rectangle

    return (
        <div className={'set-card' + (selected ? ' set-card-selected' : '') + (card.placeholder ? ' set-card-placeholder' : '')} onClick={() => toggleSelect(card)}>
            {!card.placeholder ?
                // get number of symbols on card
                Array.apply(null, Array(card.m + 1)).map(() => {}).map((_, i) => 
                    <div key={i}>
                            {card.j === 1 ?
                                <SetSquiggle 
                                    color={colors[card.i].hex}
                                    card={card}
                                    />
                                :
                                <div
                                    className={'set-card__symbol set-card__symbol-' + (card.j === 0 ? 'circle' : 'rectangle')}
                                    style={{
                                        background: card.k === 0 ? colors[card.i].hex : null,
                                        backgroundImage: card.k === 1 ? `repeating-linear-gradient(135deg, ${colors[card.i].hex} 0, ${colors[card.i].hex} 1px, transparent 0, transparent 50%)` : null,
                                        backgroundSize: card.k === 1 ? '5px 5px' : '',
                                        color: colors[card.i].hex,
                                    }} 
                                >
                                </div>
                            }
                    </div>
                )
                :
                null
            }
        </div>
    )
}

export default SetCard;