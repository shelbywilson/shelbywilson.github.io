import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

import "./_grey-matter_old.scss";
import { inTangent, circleSquare, squareWave, spacedSlot } from "./sketches";

export const GreyMatter = () => {
    const [scrollTop, setScrollTop] = useState(0);
    // const [phase, setPhase] = useState(0)
    const [spacer, setSpacer] = useState(window.innerHeight - 80)
    useEffect(() => {
        window.scrollTo(0, 0);
        const onScroll = () => {
          setScrollTop(document.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        console.log(scrollTop)
    }, [scrollTop])

	const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    };

    const windowResized = (p5, canvasParentRef) => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight)
        setSpacer(window.innerHeight - 60)
    }

	const draw = (p5) => {
        // let size = Math.min(window.innerWidth * 0.6, 400);
        // let scrollTopOffset = Math.max(0, scrollTop - height - 500);

        // p5.push();
        //     p5.translate(0, -scrollTopOffset)
        //     inTangent(p5, size)
        // p5.pop();

        p5.background(255);
  
        p5.stroke(255, 255, 255, 0)
        p5.fill(0,0,0,25)

        const fadeFill = p5.map(scrollTop - 2000, 0, 1000, 0, 255, true);

        if (fadeFill < 255) {
            p5.push();
                // p5.translate(Math.min(-window.innerWidth + scrollTopOffset, 0), 0)
                phases(p5, scrollTop)
            p5.pop();
        }

        const w = Math.max(0, scrollTop - 2000);

        if (scrollTop > 2000) {
            p5.push();
                p5.fill(0,0,0, fadeFill)
                p5.translate((window.innerWidth/2), (window.innerHeight/2))
                p5.rect(-w/2, -w/2, w);
            p5.pop();
        }

        const x = Math.min(window.innerWidth, window.innerHeight)
        const t = w * 0.0012
        if (w > x) {
            if (t < 2 * Math.PI) {
                const y = w - x;
                p5.push();
                    p5.fill(255,255,255,35)
                    circleSquare(p5, p5.map(y, 0, 3000, 0, x/2, true), t)
                p5.pop();
            } else {
                p5.push();
                    p5.fill(255,255,255, 35)
                    spacedSlot(p5, p5.map(t, 3 * Math.PI, 5 * Math.PI, x/2, x * 2, true), t)
                p5.pop();
            }
        }
    };

    const phases = (p5, offset) => {
        const size = Math.min(window.innerWidth/4, window.innerHeight/4);
        // p5.background(0);
  
        // p5.stroke(255, 255, 255, 0)
        // p5.fill(255,255,255,25)
        p5.translate((window.innerWidth/2) - size, (window.innerHeight/2) - size)
        
        for (let j = 0; j < 9; j += 1) {
            p5.push();
            p5.translate(size * (j%3), size * Math.floor(j/3))
            // let relT = p5.frameCount * ((9 - j) * 0.00015);
            let relT = offset * ((9 - j) * 0.0002);
            // let relT = ((j - 9) * PI/18);
            // let r = p5.map(sizeOffset, 0, 600, 0, size, true)
            let r = size;
            for (let i = 0; i < 10; i += 1) {
                p5.fill(0,0,0, 20 + (i * 7))

                p5.circle(0, 0, r - (i * (r / 9) + (i * -(r / 9) * Math.cos(relT))))
            }
            p5.pop()
        }
    }
    
    const titleColor = () => {
        return `hsl(358, ${Math.min(100, scrollTop/window.innerHeight * 100)}%, ${Math.max(36, 51 - (scrollTop/window.innerHeight * 15))}%)`
    }

	return (
        <div className="grey-matter">
            <div className="sketch-container">
                <Sketch setup={setup} 
                    draw={draw} 
                    windowResized={windowResized} 
                    />
            </div>
            <div className="grey-matter-content" style={{paddingTop: spacer}}>
                <h1 style={{color: titleColor()}}>
                    Grey Matter
                </h1>
                <h3>5 November 2021 – 3 December 2021</h3>
                <h3>John and June Alcott Gallery</h3>
                <h3>UNC, Chapel Hill, North Carolina</h3>
                <h2>Light Drawings by Betsy Kenyon</h2>
                {/* <h2>Words by Maxwell Neely-Cohen</h2> */}
                <h2>Animations by Shelby Wilson</h2>
                {/* <p>
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
                </p> */}
            </div>
            
        </div>
    )
};

export default GreyMatter;