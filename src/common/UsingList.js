import React from 'react';

export default ({ list }) => {
    if (!list) return null;
    return (
        <p>
            Using: {list.map((x,i) => <span key={x}>{x}{i < list.length - 1 ? ", " : ""}</span>)}
        </p>
    )
}