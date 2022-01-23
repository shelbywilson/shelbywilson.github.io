import React, { useEffect, useState } from 'react';
import HomeLink from './HomeLink';
import Header from './../header/Header';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';
import { routes, getRouteById } from './routes';
import { sketches_content } from './sketches-content';
import { notes_content } from './notes-content';
import UsingList from '../common/UsingList';
import HomeDetail from './HomeDetail';

export const Home = () => {
    const [expand, setExpand] = useState(false);
    const [scrollTop, setScrollTop] = useState(3);
    const [detail, setDetail] = useState(null)
    const [time, setTime] = useState(new Date().getMinutes() * 6 + (new Date().getMinutes() % 2 === 0 ? 90 : 0));
    const [init, setInit] = useState(false);

    useEffect( () => {
        setDetailFromHash();

        let interval = setInterval(() => {
            setTime(new Date().getMinutes() * 6 + (new Date().getMinutes() % 2 === 0 ? 90 : 0))
        }, 30000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    useEffect(() => {
        setDetailFromHash();

        window.addEventListener("hashchange", setDetailFromHash);
    
        return () => window.removeEventListener("hashchange", setDetailFromHash);
    }, [])

    useEffect(() => {
        const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, []);

    useEffect(() => {
        if (detail) {
            setScrollTop(3)
        }
    }, [detail])

    const setDetailFromHash = () => {
        const hash = window.location.hash;

        if (hash.indexOf("#/sketch/") === 0) {
            const sketch = sketches_content.find(sketch => hash.indexOf(`${sketch.id}`) > -1 )

            if (sketch) {
                setDetail({
                    ...sketch,
                    year: sketch.date,
                    type: "sketch",
                    content: <div>
                        {sketch.desc}
                        {sketch.sketch}
                        <UsingList list={sketch.using} />
                    </div>
                });
                setInit(true);
            }
        } else if (hash.indexOf("#/notes/") === 0) {
            const note = notes_content.find(note => hash.indexOf(`${note.id}`) > -1 )

            if (note) {
                setDetail({
                    ...note,
                    year: note.date,
                    type: "note",
                    content: <div>
                        {note.desc}
                        {note.content}
                        <UsingList list={note.using} />
                    </div>
                });
                setInit(true);
            }
        } else {
            const route = routes.find(route => route.url === `/${hash}`);

            setDetail(route);
            setInit(true);
        }
    }

    const toggle = () => {
        setExpand(expand => !expand);
    }
    
    const sections = [
        'sketches',
        'grey_matter',
        'vases',
        'daffodils',
        'gradients',
        'stillLife', 
        'windows',
        'cafes',
        'cloudtown',  
        'sfpcShowcase', 
        'table', 
        'skyAboveClouds',
        'weavingpatterns', 
        'muriel', 
        'amandamodo', 
        'set',
        'vurv',
    ];

    return (
        <div className={`home ${scrollTop > 2 ? 'scrolled' : ''}`}>
            <Header url={detail ? detail.type === "sketch" ? "/#/sketches" : null : null}
                />

            {detail ? 
                <HomeDetail detail={detail}
                    />
                :
                init ?
                    <div className='main'>
                        {sections.map(key => (
                            <HomeLink key={key}
                                route={getRouteById(key)}
                                />
                        ))}
                    </div>
                    :
                    null
            }
            <Footer 
                toggle={toggle}
                expand={expand}
                detail={detail}
                sections={sections}
                indicatorStyle={{filter: `hue-rotate(${time - 180}deg)`}}
                />
        </div>
    )
}

export default withRouter(Home);