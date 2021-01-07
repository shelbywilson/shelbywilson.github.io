import React from 'react';
import { routes } from './routes';

export default (props) => {
    const {
        toggle,
        expand,
        detail,
        sections,
        setDetail,
    } = props;

    const onClickLink = (e, key) => {
        e.stopPropagation();
        setDetail(routes[key]);

        if (expand) {
            toggle();
        }
    }

    return (
        <footer onClick={toggle} role='button' tabIndex='1' className={expand ? 'expand' : ''}>
            <div className='container'>
                <div className='footer-links'>
                    <nav>
                        <ul>
                            <li className={`link-home`}>
                                <a className={`${!detail ? 'active' : ''}`} 
                                    onClick={(e) => onClickLink(e, null)}>
                                        Home
                                </a>
                            </li>
                            {[...sections, 'about'].map(key => (
                                <li className={`link-${key}`}
                                    key={key}>
                                    <a href={routes[key].url} 
                                        className={`${(detail || {}).id === key ? 'active' : ''}`} 
                                        onClick={(e) => onClickLink(e, key)}>
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
                    onClick={(e) => onClickLink(e, 'about')}
                    style={props.indicatorStyle}
                    className='footer-indicator'>    
                </a>
            </div>
        </footer>
    )
}