import React from 'react';

export const UsingList = ({ list }) => {
    if (!list) return null;
    return (
        <p>
            Using: {list.map((x,i) => <span key={x}>{x}{i < list.length - 1 ? ", " : ""}</span>)}
        </p>
    )
}

export default UsingList;