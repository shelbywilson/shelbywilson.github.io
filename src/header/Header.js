import React from 'react';

export const Header = (props) => {
    const noHeader = window.location.search.indexOf('_no-header') > -1;

    if (noHeader) {
        return null;
    }

    return (
        <header>
            <a href={props.url || '/#'}>
                <h1>
                    <span>S</span><span>h</span><span>e</span><span>l</span><span>b</span><span>y</span>
                    &nbsp;
                    <span>W</span><span>i</span><span>l</span><span>s</span><span>o</span><span>n</span>
                </h1>
            </a>
        </header>
    )
}

export default Header;