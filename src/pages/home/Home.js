import React, { Fragment, useEffect, useState } from 'react';
import HomeDetail from './HomeDetail';
import Header from './../../header/Header';
import Footer from './Footer';
import { withRouter } from 'react-router-dom';
import { routes } from './routes';

export const Home = (props) => {
    const [expand, setExpand] = useState(false);
    const [scrollTop, setScrollTop] = useState(3);
    const [detail, setDetail] = useState(null)
    const [time, setTime] = useState(new Date().getMinutes() * 6 + (new Date().getMinutes() % 2 === 0 ? 90 : 0));
    const [init, setInit] = useState(false);

    useEffect(() => {
        const { location: { hash } } = props;   

        setInitialDetail(hash);
    }, [props])

    useEffect( () => {
        setInitialDetail(window.location.hash);

        let interval = setInterval(() => {
            setTime(new Date().getMinutes() * 6 + (new Date().getMinutes() % 2 === 0 ? 90 : 0))
        }, 30000)

        return () => {
            clearInterval(interval);
        }
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

    const setInitialDetail = (hash) => {
        const key = Object.keys(routes).find(key => routes[key].url === `/${hash}`);

        setDetail(routes[key]);
        setInit(true);
    }

    const toggle = () => {
        setExpand(expand => !expand);
    }
    
    const sections = [
        'cloudtown', 
        'stillLife',  
        'sfpcShowcase', 
        'table', 
        'skyAboveClouds',
        'weavingpatterns', 
        'muriel', 
        'amandamodo', 
        'set',
        'vurv'
    ];

    return (
        <div className={`home ${scrollTop > 2 ? 'scrolled' : ''}`}>
            {/* <div className={`time-background ${detail ? 'visible': ''}`} style={{filter: `hue-rotate(${time}deg)`}}>          
            </div> */}

            <Header onClick={setDetail} />

            {detail ? 
                <HomeDetail detail={detail}
                    />
                :
                init ?
                    <div className='main'>
                        {sections.map(key => (
                            <div className={`img ${key} ${routes[key].inverse ? 'inverse': ''} ${routes[key].dark ? 'dark' : ''}`}
                                key={key}>
                                <img src={routes[key].img} alt="" />
                                <h4>&#9724;&nbsp;{routes[key].type}</h4>
                                <a href={routes[key].url} 
                                    onClick={() => setDetail(routes[key])}>
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
                setDetail={setDetail}
                indicatorStyle={{filter: `hue-rotate(${time - 180}deg)`}}
                />
        </div>
    )
}

export default withRouter(Home);