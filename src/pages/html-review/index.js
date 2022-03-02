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
        <span className="html-review-layout">
            <header>
                <h1>
                    the html review
                </h1>
                <h2>
                    issue #1
                </h2>
            </header>
            <main>
                <section>
                    <div className="article-container">
                        {pages.map(page => (
                            <article className={mode} key={page.i}>
                                <a href="#" className="article-link">
                                    {/* &#8593; */}
                                </a>
                                <div className="left">
                                    <div>
                                        <p>
                                            {page.author}
                                        </p>
                                        <h3>
                                            {page.title}
                                        </h3>
                                    </div>
                                </div>
                                <div className="right">
                                    <div>
                                        <p>
                                            {page.author}
                                        </p>
                                        <h3>
                                            {page.title}
                                        </h3>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <footer>
                <p>
                    <em>the html review</em> is an annual journal of literary work specifically made to exist on the web
                </p>
                <div className="footer-content">
                    <nav>
                        <a href='/about'>
                            about
                        </a>
                        <a href='/faq'>
                            faq
                        </a>
                    </nav>
                    <select value={mode} onChange={(e) => {setMode(e.target.value)}}>
                        <option disabled>
                            select mode
                        </option>
                        {['door-in', 'door-out', 'drawer', 'cabinet', 'window', 'saloon'].map(option => (
                            <option key={option} value={option}>
                                {option.replace('-', ' ')}
                            </option>
                        ))}
                    </select>
                </div>
            </footer>
        </span>
    )
}

export default Layouts;