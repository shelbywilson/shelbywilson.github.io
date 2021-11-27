import React from 'react';
import UsingList from '../../common/UsingList';
import { sketches_content } from '../sketches-content';

import "../partials/_home-detail-sketches.scss";

export default () => {
    if (!sketches_content) return null;

    return (
        <div className="home-detail-sketches">
            <div className="grid">
                {sketches_content.sort((a, b) => b.date.localeCompare(a.date)).map(sketch => (
                    <div key={sketch.id}>
                        <div className="title">
                            <p>
                                <a href={sketch.url}>View</a>
                            </p>
                            <h3>
                                {sketch.title}
                            </h3>
                        </div>
                        <div className="img">
                            <a href={sketch.url}>
                                <img src={sketch.thumb} alt={sketch.thumb_alt} />
                            </a>
                        </div>
                        <div>
                            {sketch.desc}

                            <UsingList list={sketch.using} />

                            {sketch.related &&
                                <p>
                                    Related: <a href={sketch.related.url}>{sketch.related.title}</a>
                                </p>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}