import React from 'react';

export default ({ list }) => {
    return (
        <p>
            Using: {list.map((x,i) => <span key={x}>{x}{i < list.length - 1 ? ", " : ""}</span>)}
        </p>
    )
}