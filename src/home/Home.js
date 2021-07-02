import React, { Fragment, useEffect, useState } from 'react';
import HomeDetail from './HomeDetail';
import Header from './../header/Header';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';
import { routes } from './routes';
import { sketches_content } from './sketches-content';
import UsingList from '../util/UsingList';

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
    
        // return () => window.removeEventListener("hashchange", onHashChange);
    }, [])

    useEffect(() => {
        const onScroll = e => {
          setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

    useEffect(() => {
        if (detail) {
            setScrollTop(3)
        }
    }, [detail])

    const setDetailFromHash = () => {
        const hash = window.location.hash;

        if (hash.indexOf("#/sketch/") === 0) {
            const sketch = sketches_content.find(sketch => hash === `#/sketch/${sketch.id}` )

            if (sketch) {
                setDetail({
                    ...sketch,
                    year: sketch.date.substring(0, 4),
                    type: "sketch",
                    content: <div>
                        {sketch.desc}
                        {sketch.sketch}
                        <UsingList list={sketch.using} />
                    </div>
                });
                setInit(true);
            }
        } else {
            const key = Object.keys(routes).find(key => routes[key].url === `/${hash}`);

            setDetail(routes[key]);
            setInit(true);
        }
    }

    const toggle = () => {
        setExpand(expand => !expand);
    }
    
    const sections = [
        'sketches',
        'daffodils',
        'gradients',
        'stillLife', 
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
                            <div className={`img-container ${key} ${routes[key].dark ? 'dark' : ''}`}
                                style={!routes[key].img && !routes[key].homeBanner ? {minHeight: 102, border: "1px solid #000"} : {}}
                                key={key}>
                                <div>
                                    {routes[key].img ?
                                        <img src={routes[key].img} alt={routes[key].alt} />
                                        :
                                        routes[key].homeBanner
                                    }
                                </div>
                                {routes[key].type ? <h4>&#9724;&nbsp;{routes[key].type}</h4> : null}
                                <a href={routes[key].url}>
                                    {routes[key].title.split('').map((letter, i) => 
                                        letter.replace(/^\s+|\s+$/g, '').length === 0 ? 
                                            <Fragment key={i}>&nbsp;</Fragment> 
                                            : 
                                        <span key={i}>{letter}</span>
                                    )}
                                </a>
                            </div>
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