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
// import vases_thumb from './../images/sketches/thumbnails/vases_thumb.png';
import pattern_finder_thumb from './../images/sketches/thumbnails/pattern_finder_thumb.png';
import sunset_squish_thumb from './../images/sketches/thumbnails/sunset_squish_thumb.png';
import genuary_7_thumb from './../images/sketches/thumbnails/genuary_7.png';
import mat_calc_thumb from './../images/sketches/thumbnails/mat_calc_thumb.png';

import Corners from '../pages/sketches/corners';
import CistercianNumerals from '../pages/cistercian-numerals/index.tsx';
import Sketch_2021_07_01 from "../pages/sketches/2021-07-01";
import Sketch_2021_12_01 from "../pages/sketches/2021-12-01";
import Sketch_2022_01_05 from "../pages/sketches/2022-01-05/Container";
// import { Knights } from '../pages/sketches/knights';

export const sketches_content = [
    // {
    //     title: "knights",
    //     id: "knights",
    //     date: "2022-01-02",
    //     url: "/#/sketch/knights",
    //     // thumb: vases_thumb,
    //     // thumb_alt: "solid and wirefreame renderings of vases",
    //     // desc: <p>Parameterized vases.</p>,
    //     using: ["React"],
    //     sketch: <Knights />
    // },
    {
        title: 'mat calculator',
        id: 'mat_calc',
        date: '2022-02-18',
        url: '/mat-calc',
        thumb: mat_calc_thumb,
        thumb_alt: 'Diagram of mat for image.',
        using: ['SVG'],
    },
    {
        title: 'Genuary #7',
        id: 'twenty-one-isometric-cubes',
        date: '2022-01-05',
        desc:  <p>
            Twenty-one isometric cubes of varying sizes.
            </p>,
        thumb: genuary_7_thumb,
        wide: true,
        sketch: <div>
            <p>Based <a href="https://massmoca.org/event/walldrawing766/" target="_blank" rel="noopener noreferrer nofollow">Wall Drawing 766</a>, first drawn by Isabelle Beaumont, Antoine Bonhomme, Flavien Damarigny and Anthony Sansotta as part of the 1994 Sol LeWitt retrospective.</p>
            <p>
                More about <a href="https://genuary.art/" target="_blank" rel="noopener noreferrer nofollow">Genuary 2022</a>.
            </p>
            <Sketch_2022_01_05 />
            <p>
                <a href="/twenty-one-isometric-cubes" target="_blank" rel="noopener noreferrer nofollow">View full screen</a>.
            </p>
        </div>,
        using: ['SVG, SCSS, React.js'],
    },
    // {
    //     title: "vases",
    //     id: "vases",
    //     date: "2021-08-08",
    //     url: "/vases",
    //     thumb: vases_thumb,
    //     thumb_alt: "solid and wirefreame renderings of vases",
    //     desc: <p>Parameterized vases.</p>,
    //     using: ["p5.js"],
    // },
    {
        title: "2021-07-01",
        id: "2021-07-01",
        date: "2021-07-01",
        thumb_alt: "distorted flowers",
        thumb: _2021_07_01_thumb,
        desc: <p>Deconstructing an image. Hover or click.</p>,
        sketch: <Sketch_2021_07_01 />,
        using: ["CSS"],
    },
    {
        title: "Sunset Squish",
        id: "2021-12-01",
        date: "2021-12-01",
        url: "/sunset-squish",
        sketch: <Sketch_2021_12_01 />,
        thumb: sunset_squish_thumb,
        thumb_alt: 'Illustrated sunset',
        using: ["HTML, SCSS"],
    },
    {
        title: "Cistercian Numerals",
        id: "cistercian-numerals",
        desc: <p>A numbering system developed by 13th century monks. Each glyph represents an integer from 1 to 9,999.</p>,
        thumb: cistercian_numerals_thumb,
        thumb_alt: "A numbering system representing 1 + 4 = 5",
        date: "2021-06-26",
        using: ["SVG"],
        sketch: <CistercianNumerals />
    },
    {
        title: "Pattern Finder",
        id: "pattern-finder",
        desc: <p>Is there a pattern?</p>,
        url: "/pattern-finder",
        date: "2020-11-11",
        thumb: pattern_finder_thumb,
        thumb_alt: "Nested colorful squares",
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
].map(sketch => (
    {
        ...sketch,
        url: sketch.url || `/#/sketch/${sketch.id}`,
    }
))