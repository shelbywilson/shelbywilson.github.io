import React from 'react';
import { routes } from './routes';

export const Footer = (props) => {
    const {
        toggle,
        expand,
        detail,
        sections,
    } = props;

    const onClickLink = (e) => {
        e.stopPropagation();

        if (expand && window.innerWidth < 767) {
            toggle();
        }
    }

    return (
        <footer className={expand ? 'expand' : ''}>
            <div className='footer-links' onClick={toggle} role='button' tabIndex='0'>
                <nav>
                    <ul>
                        <li className={`link-home`}>
                            <a className={`${!detail ? 'active' : ''}`} 
                                href={"/#"}
                                onClick={(e) => onClickLink(e)}>
                                    Home
                            </a>
                        </li>
                        {[...sections, 'about'].map(key => (
                            <li className={`link-${key}`}
                                key={key}>
                                <a href={routes[key].url} 
                                    className={`${(detail || {}).id === key ? 'active' : ''}`} 
                                    onClick={(e) => onClickLink(e)}>
                                        {routes[key].title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className={`footer-toggle`}>
                <a 
                    onClick={(e) => {
                        e.stopPropagation(); 
                        toggle();
                    }}>
                        Menu
                </a>
            </div>
            <a href='/#/about'  
                onClick={(e) => onClickLink(e)}
                style={props.indicatorStyle}
                className='footer-indicator'>    
            </a>
        </footer>
    )
}

export default Footer;