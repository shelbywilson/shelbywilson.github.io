import React from 'react';

export default (props) => {
    const noHeader = window.location.hash.indexOf('_no-header') > -1;

    if (noHeader) {
        return null;
    }

    return (
        <header>
            <a href={props.url || '/#'} onClick={() => props.onClick ? props.onClick() : null}>
                <h1>
                    <span>S</span><span>h</span><span>e</span><span>l</span><span>b</span><span>y</span>
                    &nbsp;
                    <span>W</span><span>i</span><span>l</span><span>s</span><span>o</span><span>n</span>
                </h1>
            </a>
        </header>
    )
}