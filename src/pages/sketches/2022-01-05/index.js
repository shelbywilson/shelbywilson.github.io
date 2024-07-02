import React, { useState, useEffect, Fragment } from 'react';
import Section from './Section';
import _ from "lodash";

import './_cube.scss';

class Box {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.boxes = [];
    }

    addBoxes(n, dim) {
        let splits;
        if (dim == "x") {
            splits = splitDimension(this.w, n)
            this.boxes = splits.map(([w]) => {
                return new Box(w, 100)
            });
        } else {
            splits = splitDimension(this.h, n);
            this.boxes = splits.map(([h]) => {
                return new Box(100, h);
            })
        }
    }
}

const splitDimension = (l, n) => {
    let splits = [];
    let remaining = l;
    for (let i=0; i<n-1; i++) {
        let r = Math.random();
        let seg = remaining * (1/n);
        let s = Math.round(seg + 0.75*(0.5-r)*seg);
        splits.push([s]);
        remaining -= s;
    }
    splits.push([remaining])
    return splits;
};

const getR = () => {
    let r1 = [Math.floor(2 * Math.random()), Math.floor(3 * Math.random()), Math.floor(2 * Math.random())]
    let r2;
    let r3;

    while (_.isEqual(r1, r2) || !r2) {
        r2 = [Math.floor(2 * Math.random()), Math.floor(3 * Math.random()), Math.floor(2 * Math.random())];
    }

    while (_.isEqual(r1, r3) || _.isEqual(r2, r3) || !r3) {
        r3 = [Math.floor(2 * Math.random()), Math.floor(3 * Math.random()), Math.floor(2 * Math.random())];
    }

    return [r1,r2,r3]
}

export const Sketch = () => {
    const [preserveAspectRatio, setPreserveAspectRation] = useState(false)
    const [sections, setSections] = useState(null)
    const [r] = useState(getR())

    const getSections = () => {
        let bigBox = new Box(100,100);
        const r1 = r[0];
        const r2 = r[1];
        const r3 = r[2];

        bigBox.addBoxes(2, "y");
        bigBox.boxes.forEach((box, i) => {
            box.addBoxes(3, "x");
            box.boxes.forEach((bbox, j) => {
                bbox.addBoxes(2, "y");
                bbox.boxes.forEach((bbbox, k) => {
                    if (!_.isEqual([i,j,k], r1)) {
                        if (!_.isEqual([i,j,k], r2)) {
                            if (!_.isEqual([i,j,k], r3)) {
                                bbbox.addBoxes(2, "x")
                            }
                        }
                    }
                })
            });
        });

        setSections(bigBox)
    }

    useEffect(() => {
        let timeout;
        const update = () => {
            getSections();
            // timeout = setTimeout(update, 15000 * Math.random() + 2000)
        }

        update();

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    if (!sections) {
        return null;
    }

    return (
        <Fragment>
            <Section section={sections}
                orientation="column"
                preserveAspectRatio={preserveAspectRatio}
                />
            <div role="button"
                tabIndex={1}
                style={{position: 'fixed', height: '100%', width: '100%', top: 0, left: 0}}
                onClick={() => setPreserveAspectRation(prev => !prev)}>
            </div>
        </Fragment>
    )
}

export default Sketch;