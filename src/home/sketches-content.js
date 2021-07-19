import React from 'react';

import monolith_thumb from './../images/sketches/thumbnails/monolith.png';
import corners_thumb from './../images/sketches/thumbnails/corners.png';
import room_with_a_view_thumb from './../images/sketches/thumbnails/room_with_a_view.png';
import windows_thumb from './../images/sketches/thumbnails/windows.png';
import cones_thumb from './../images/sketches/thumbnails/cones.png';
import noise_d3_thumb from './../images/sketches/thumbnails/noise_d3.png';
import noise_canvas_thumb from './../images/sketches/thumbnails/noise_canvas.png';
import cistercian_numerals_thumb from './../images/sketches/thumbnails/cistercian_numerals.png';
import stairs_stars_thumb from './../images/sketches/thumbnails/stairs_stars.png';
import _2021_07_01_thumb from './../images/sketches/thumbnails/2021_07_01.png';

import Corners from '../pages/sketches/corners';
import CistercianNumerals from '../pages/cistercian-numerals/index.tsx';
import Sketch_2021_07_01 from "../pages/sketches/2021-07-01";

export const sketches_content = [
    {
        title: "2021-07-01",
        id: "2021-07-01",
        date: "2021-07-01",
        url: "/#/sketch/2021-07-01",
        thumb: _2021_07_01_thumb,
        desc: <p>Deconstructing an image. Hover or click.</p>,
        sketch: <Sketch_2021_07_01 />,
        using: ["CSS"],
    },
    {
        title: "Cistercian Numerals",
        id: "cistercian-numerals",
        desc: <p>A numbering system developed by 13th century monks. Each glyph represents an integer from 1 to 9,999.</p>,
        thumb: cistercian_numerals_thumb,
        thumb_alt: "A numbering system representing 1 + 4 = 5",
        date: "2021-06-26",
        using: ["SVG"],
        url: "/#/sketch/cistercian-numerals",
        sketch: <CistercianNumerals />
    },
    {
        title: "Monolith",
        id: "monolith",
        desc: <p>I watched <em>2001: A Space Odyssey</em> for the first time. Click and drag to rotate.</p>,
        thumb: monolith_thumb,
        thumb_alt: "A reflective structure in a desert landscape.",
        date: "2020-11-30",
        using: ["Three.js"],
        url: "/monolith",
    },
    {
        title: "El rincón, la esquina",
        id: "corners",
        desc: <p>English has a single word for "corner". Spanish distinguishes between interior and exterior corners. Change the angle to see the threshold.</p>,
        thumb: corners_thumb,
        thumb_alt: "A diagram of an interior angle (el rincón) and an exterior one (la esquina).",
        date: "2021-02-20",
        using: ["d3.js"],
        url: "/#/sketch/corners",
        sketch: <Corners />
    },
    {
        title: "A Room with a View",
        id: "room-with-a-view",
        desc: <p>A dark room gets progressively lighter each time the blinds are opened.</p>,
        thumb: room_with_a_view_thumb,
        thumb_alt: "A dark room and window with blinds. Light through the window creates shadows on the floor.",
        date: "2021-01-08",
        using: ["SCSS"],
        url: "/room-with-a-window",
    },
    {
        title: "Windows",
        id: "windows",
        desc: <p>Various windows and coverings. Turn the light on, open the blinds.</p>,
        thumb: windows_thumb,
        thumb_alt: "The moon peaks through a windows blinds.",
        date: "2021-01-05",
        using: ["SCSS"],
        url: "/windows",
    },
    {
        title: "Follow Field",
        id: "follow-field",
        desc: <p>Cones on an articulated joint follow cursor.</p>,
        thumb: cones_thumb,
        thumb_alt: "Cones oriented toward red diamond.",
        date: "2021-04-20",
        using: ["Three.js"],
        related: {
            url: "/#/daffodils",
            title: "Daffodils",
        },
        url: "/sketches/follow-field/1.html",
        // sketch: <div>
        //     <iframe src="https://shelby.cool/sketches/follow-field/1.html"
        //         referrerPolicy='no-referrer' 
        //         loading='lazy'></iframe>
        //     <p>
        //         Related: <a href={"/#/daffodils"}>{"Daffodils"}</a>
        //     </p>
        // </div>
    },
    {
        title: "Noise",
        id: "noise",
        desc: <p>Shifting gradients created by a grid of squares.</p>,
        thumb: noise_d3_thumb,
        thumb_alt: "A gradient of green and peachy orange.",
        date: "2021-02-20",
        using: ["Perlin noise", "d3.js"],
        url: "/sketches/noise/1.html",
        related: {
            url: "/#/gradients",
            title: "Gradients",
        },
    },
    {
        title: "Noise II",
        id: "noise-2",
        desc: <p>Blobs emerge from pixel manipulation.</p>,
        thumb: noise_canvas_thumb,
        thumb_alt: "A gradient of blue and pink.",
        date: "2021-02-24",
        url: "/sketches/noise/2.html",
        using: ["Perlin noise", "Canvas"],
        related: {
            url: "/#/gradients",
            title: "Gradients",
        },
    },
    {
        title: "John Whitney-esque",
        id: "john-whitney",
        desc: <p>Inspired by motion graphics of John Whitney.</p>,
        date: "2019-10-21",
        thumb: "https://raw.githubusercontent.com/shelbywilson/sfpc-rtp/master/whitney/images/harmonic-lines.gif",
        thumb_alt: "Colorful sine waves.",
        using: ["openFrameworks"],
        newTab: true,
        url: "https://vimeo.com/367877072",
    },
    {
        title: "Stairs Stars",
        id: "stairs-stars",
        desc: <p></p>,
        thumb: stairs_stars_thumb,
        thumb_alt: "Stairs",
        date: "2020-03-31",
        using: ["p5.js"],
        newTab: true,
        url: "https://editor.p5js.org/shelbyw/full/P9mRZN8Xk",
    },
]