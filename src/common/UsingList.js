import React from 'react';

export const UsingList = ({ list }) => {
    if (!list || list.length === 0) return null;
    return (
        <p>
            Using: {list.map((x,i) => <span key={x}>{x}{i < list.length - 1 ? ", " : ""}</span>)}
        </p>
    )
}

export default UsingList;