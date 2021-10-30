import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

import "./_grey-matter.scss";
import { inTangent } from "./sketches";

export const GreyMatter = () => {
    const [scrollTop, setScrollTop] = useState(0);
    useEffect(() => {
        const onScroll = () => {
          setScrollTop(document.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

	const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    };

	const draw = (p5) => {
        const size = Math.min(window.innerWidth * 0.6, 400);
        // p5.background(0);
  
        // p5.stroke(255, 255, 255, 0)
        // p5.fill(255,255,255,25)
        // p5.translate((window.innerWidth/2) - (size), (window.innerHeight/2) - (size ))
        
        // for (let j = 0; j < 9; j += 1) {
        //     p5.push();
        //     p5.translate(size * (j%3), size * Math.floor(j/3))
        //     let relT = p5.frameCount * ((9 - j) * 0.00015);
        //     // let relT = ((j - 9) * PI/18);
        //     for (let i = 0; i < 10; i += 1) {
        //         p5.fill(255,255,255, 20 + (i * 7))
        //         p5.circle(0, 0, size - (i * (size / 9) + (i * -(size / 9) * Math.cos(relT))))
        //     }
        //     p5.pop()
        // }
        inTangent(p5, size)
    };
    
    const titleColor = () => {
        return `hsl(358, ${Math.min(100, scrollTop/window.innerHeight * 100)}%, ${Math.max(36, 51 - (scrollTop/window.innerHeight * 15))}%)`
    }

	return (
        <div className="grey-matter">
            <Sketch setup={setup} draw={draw} />
            <div className="grey-matter-essay">
                <h1 style={{color: titleColor()}}>
                    Grey Matter
                </h1>
                <div>
                    <h2>Original Work by Betsy Kenyon</h2>
                    <h2>Words by Maxwell Neely-Cohen</h2>
                    <h2>Animations by Shelby Wilson</h2>
                </div>
                <p>
                    The hardest thing one can do on a
                    flat surface is represent light with
                    any authenticity. Not just light
                    that is ambient, that is merely
                    a medium for other objects, but
                    true light, emanating outward,
                    radiating with a brightness that
                    can pulse, rebound, and fade.
                </p>
                <p>
                    Betsy Kenyon can make paper
                    scream with photons. She can put
                    a fusion reaction onto a millimeter
                    plane. She does this by using light
                    itself as a medium. A source. No
                    lens needed, just alternating the
                    gift and denial of illumination at
                    the right moments. Every burn
                    can be controlled. We can paint
                    with light it turns out. Wield it
                    at a target.
                </p>
                <p>
                    Planets and doors, logos and swarms, the frozen chaos of particle collision at the smallest possible level. Shapes in mathematical transformations so perfect they belong in geometry textbooks. Film backdrops in stasis.
                </p>
                <p>
                    Betsy once told me that she
                    wanted her images to be verbs.
                </p>
                <p>
                    As much as I want to assign
                    nouns to them—gravity, cosmos,
                    shadows—she is right, they are
                    verbs, best verbalized as actions.
                </p>
                <p>
                    They push. Pull. Rotate. Cycle.
                    Drop. Blur. Filter. Contract.
                    Expand. Crush. Some of them run.
                    Some of them crawl. Some of them
                    even disappear. A magic trick.
                    Frozen.
                </p>
                <p>
                    When rendered in digital
                    space these forms reveal their
                    tricks and secrets. How a simple
                    shape set into motion can blossom
                    into a complex lattice, a structure
                    worthy of a sigil or temple. How
                    long it takes our eyes to notice
                    a blurring edge, the slight shift
                    of a gradient. How that can
                    become layers of a staircase, an
                    invitation to plunge or accept an
                    outstretched hand.
                </p>
                <p>
                    It almost doesn’t matter if the
                    images are moving or not. The
                    animations can be read as still, the
                    photograms rendered as moving.
                </p>
                <p>
                    Don’t fall in.
                </p>
            </div>
        </div>
    )
};

export default GreyMatter;