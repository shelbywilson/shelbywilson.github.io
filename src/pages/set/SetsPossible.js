import React from 'react';

import SetCard from './SetCard';

export const SetPossible = (props) => (
    <div className='sets-possible'>
        {props.sets.map((set,i) => (
            <div style={{transform: 'scale(0.7)', display: 'grid', gridTemplateColumns: '33% 33% 33%'}} key={i}>
                {set.map((card,i) => (
                    <SetCard
                        key={i}
                        card={card}
                        />
                ))}
            </div>
        ))}
    </div>
)

export default SetPossible;