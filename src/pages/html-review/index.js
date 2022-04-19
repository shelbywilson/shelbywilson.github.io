import React, { useState, useEffect } from 'react';
// import guessWordsImg from './img/guess-words.png';

import './html-review.scss';

const articles = [
    {
        title: "Today, we saw",
        author: "Anna Garbier & Lan Zhang",
        description: "<p>A travel log that documents a day's trip across the image-filled web.</p>",
        short_desc: 'A travel log that documents a day\'s trip across the image-filled web.',
        url: "today-we-saw/index.html"
    },
    {
        title: "Guess Words",
        author: "May-Li Khoe",
        description: "<p>A meditation on the moment and the surprising collective solace found in playing Wordle.</p>",
        short_desc: "A meditation on the moment and the surprising collective solace found in playing Wordle.",
        url: "http://maylikhoe.com/writing/guess-words.html",
    },
    {
        title: "Saturn Return",
        author: "Larissa Pham",
        description: "*<br/>*<br/>*<br/>*<br/><br/>i thought i knew what i needed to figure it all out",
        short_desc: "*<br/>*<br/>*<br/>*<br/><br/>i thought i knew what i needed to figure it all out",
        url: "saturn-return/index.html",
    },
    {
        title: "Anonymous Animal",
        author: "Everest Pipkin",
        description: '<p>Anonymous Animal is a 15 minute durational browser poem that runs every hour, on the hour.</p><p>Using the somewhat-outdated (and rather unstable) web technology of iframes to load and unload pages on a synced clock, Anonymous Animal guides visitors on a collective walk through links, images, wiki pages, and livestreams across the internet. It is an elegy for the era of cross-origin browser requests and off-site embeddable media, as well as a meditation on still being quietly online, together.</p>',
        short_desc: 'A 15 minute durational browser poem that runs every hour, on the hour.',
        url: "https://code-scraps.neocities.org/anonymous_animal/index.html",
    },
    {
        title: "Accumulation",
        author: "Katy Gero",
        description: "<p>'Accumulation' was influenced by several strands of inquiry: reading Rachel Carson's book 'The Sea Around Us', an epic overview of what we knew about the sea in the 1950s; thinking about where our language comes from, its colonial history, and how it changes over time; and exploring how I want to make use of computation in my poetry practice. The text and layout were created in tandem and informed each other; this might be my first truly html-native poem.</p>",
        short_desc: "The text and layout were created in tandem and informed each other; this might be my first truly html-native poem.",
        url: "accumulation/index.html",
    },
    {
        title: "A Small Memorial",
        author: "Todd Anderson",
        description: "<p>This piece is a small memorial, like a little roadside shrine. You can only see the piece if you work together with the other people visiting the site at the same time, the piece will only reveal itself if more than half the people on the site are holding down the requested keys. It's not much, but I like this small feeling of togetherness, the small feeling of relying on someone else to get where you are going.</p>",
        short_desc: 'Like a little roadside shrine.',
        url: "https://a-small-memorial.glitch.me/",
    },
    {
        title: "Flight Simulation",
        author: "Yuzhu Chai",
        description: "<p>welcome aboard</br>26F</br>play our entertainment selection</p>",
        short_desc: "welcome aboard</br>26F</br>play our entertainment selection",
        url: "https://yuzhuchai.com/works/flightSimulation/",
    },
    {
        title: "Progress",
        author: "Nick Montfort",
        description: "<p>This computational poem is free software. You are encouraged to study the source and welcome to modify it if you like. It is known to load properly on all current, updated major operating systems and browsers. Current Mac OS and Windows systems do have incomplete font coverage, and users of these systems will see rectangles where glyphs should appear at one point. The problem is easily remedied by installing Linux on your computer.</p>",
        short_desc: "This computational poem is free software. You are encouraged to study the source and welcome to modify it if you like.",
        url: "shoulder-strange-shut",
    },
    {
        title: "A Good Game of Catch",
        author: "Eloisa Amezcua",
        description: '<p>The text from this poem, spoken by Bobby Chacon, is from the "A Loose Chacon Learns to Face the Facts," by Michael Katz, The New York Times, January 13, 1984: "We’re going to play a good game of catch…We’ve got two fighters here who like to fight. We love to get hit. We love to hit back."</p>',
        short_desc: `“We’re going to play a good game of catch..."`,
        url: "https://player.vimeo.com/video/697922132?h=53ba8c750d",
    },
    {
        title: "western hearts at the edge of saying",
        author: "Jayson P. Smith",
        description: `<p>"the familiarity of this narrative does nothing to appease the hunger of recorded memory…in a very real sense, every writing as revision makes the discovery all over again" —Hortense Spillers</p>`,
        short_desc: "A sonnet.",
        url: "section-be-shape",
    },
    {
        title: "A Letter from the Editor",
        author: "Maxwell Neely-Cohen",
        last: true,
    },
    {
        title: "z",
    }
].sort((a,b) => a.last ? 1 : a.title.localeCompare(b.title))

const modes = ['hatch', 'blinds', 'door', 'cabinet', 'saloon', 'window'];

export const Layouts = () => {
    const [mode, setMode] = useState(modes[Math.floor(Math.random() * modes.length)])
    // const [mode, setMode] = useState(Math.floor(Math.random() * (modes.length - 1)))
    const [activated, setActivated] = useState(articles.map(() => false))

    useEffect(() => {
        document.body.classList = [mode];
    }, [mode])

    const inner = (page) => {
        return (
            <div>
                <h3>
                    {page.title}
                </h3>
                <p>
                    &#8594; {page.author}
                </p>
            </div>
        )
    }

    return (
        <span className={`html-review-layout ${mode}`}>
            <header>
                <h1>
                    the html review
                </h1>
                <h2>
                    issue 01, spring 2022
                </h2>
            </header>
            <main>
                <section>
                    <div className='article-container'>
                        {articles.map((page, i) => (
                            <article onMouseEnter={() => setActivated(prev => {
                                    const arr = [...prev];
                                    arr[i] = true;
                                    return arr;
                                })}
                                className={`${mode} ${activated[i] ? 'activated' : ''}`}
                                key={i}>
                                <div className='description-container'>
                                    <div>
                                        {/* <p>
                                            <a href={page.url} target='_blank' rel="noreferrer">
                                                View <em>{page.title}</em><span>&#8599;</span>
                                            </a>
                                        </p> */}
                                        <div className='long-desc' dangerouslySetInnerHTML={{__html: page.description}}>
                                        </div>
                                        <p className='short-desc' dangerouslySetInnerHTML={{__html: page.short_desc}}>
                                        </p>
                                    </div>
                                </div>
                                <div className={`article-inner`}>
                                    <a href={page.url} className="article-link">
                                        View {page.title}
                                    </a>
                                    <div className="article-content left">
                                        {inner(page)}
                                    </div>
                                    <div className="article-content right" aria-hidden={true}>
                                        {inner(page)}
                                    </div>
                                    {[0,1,2,3,4,5,6,7].map(blind => (
                                        <div className="article-content" aria-hidden={true} key={blind}>
                                            {inner(page)}
                                        </div>
                                    ))}
                                </div>
                                {/* <span className='label'>
                                    &#8605;
                                </span> */}
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
                    <select value={mode} onChange={(e) => {
                            setActivated(articles.map(() => false))
                            setMode(e.target.value)
                        }}>
                        <option disabled>
                            select mode
                        </option>
                        {modes.map(option => (
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