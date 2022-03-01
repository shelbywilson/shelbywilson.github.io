import React, { useState } from 'react';
var randomWords = require('random-words');

import './html-review.scss';

export const Layouts = () => {
    const [mode, setMode] = useState('door-in')

    const [pages] = useState([0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
        {
            title: `Title ${randomWords({exactly: 1, wordsPerString: Math.ceil(Math.random() * 10) })}`, 
            author: 'Byline Here',
            i,
            description: randomWords({exactly: 1, wordsPerString: Math.floor(Math.random() * 100) + 10}),
            url: randomWords({exactly: 1, wordsPerString: 3, separator: '-'})
        }
    )))
    return (
        <React.Fragment>
            <header>
                <h1>
                    the html review
                </h1>
                <h2>
                    issue #1
                </h2>
            </header>
            <footer>
                <p>
                    maybe a footer goes here
                </p>
                <select value={mode} onChange={(e) => {setMode(e.target.value)}}>
                    <option disabled>
                        select mode
                    </option>
                    {['door-in', 'door-out', 'cabinet', 'window'].map(option => (
                        <option key={option} value={option}>
                            {option.replace('-', ' ')}
                        </option>
                    ))}
                </select>
            </footer>
            <main>
                <section className="html-review-layout">
                    <div className="article-container">
                        {pages.map(page => (
                            <article className={mode} key={page.i}>
                                <a href="#" className="article-link">
                                    {/* &#8593; */}
                                </a>
                                <div>
                                    <p>
                                        {page.author}
                                    </p>
                                    <h3>
                                        {page.title}
                                    </h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Layouts;