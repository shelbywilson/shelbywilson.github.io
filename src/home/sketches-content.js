import React from 'react';

import monolith_thumb from './../images/sketches/thumbnails/monolith.png';
import corners_thumb from './../images/sketches/thumbnails/corners.png';
import room_with_a_window_thumb from './../images/sketches/thumbnails/room_with_a_view.png';
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
import falling_letters from './../images/sketches/thumbnails/falling_letters.png';
import _2022_02_22_thumb from './../images/sketches/thumbnails/2022_02_22.png';
import _2022_04_10_thumb from './../images/sketches/thumbnails/2022_04_10.png';
import pixel_sort_thumb from './../images/sketches/thumbnails/pixel_sort_thumb.png';
import textonyms_thumb from './../images/sketches/thumbnails/textonyms.png';
import css_tapestry_thumb from './../images/sketches/thumbnails/css_tapestry.png';
import field_of_flowers_thumb from './../images/sketches/thumbnails/field_of_flowers.png';
import shadow_weaving_thumb from './../images/sketches/thumbnails/shadow-weaving.png';

import Corners from '../pages/sketches/corners';
import CistercianNumerals from '../pages/cistercian-numerals/index.tsx';
import Sketch_2021_07_01 from "../pages/sketches/2021-07-01";
import Sketch_2021_12_01 from "../pages/sketches/2021-12-01";
import Sketch_2022_01_05 from "../pages/sketches/2022-01-05/Container";
import Sketch_2022_02_22 from "../pages/sketches/2022-02-22";
import Sketch_2022_04_10 from "../pages/sketches/2022-04-10/index-1";
import FallingLetters from "../pages/sketches/falling-letters/FallingLetters";
import PixelSort from '../pages/pixel-sort';
import CSSTapestry from '../pages/css-tapestry';
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
        id: 'soy-sauce',
        title: 'soy sauce',
        date: '2024-06-12',
        url: 'https://shelby.cool/disco-ball/soy-sauce',
        thumb: 'https://raw.githubusercontent.com/shelbywilson/disco-ball/main/preview-soy-sauce.png',
        using: ['three.js', 'polycam'],
    },
    {
        id: 'melvyn',
        title: 'in our time explorer',
        date: '2022-10-04',
        url: 'https://shelby.cool/melvyn/',
        thumb: 'https://user-images.githubusercontent.com/5523024/193950974-8e85a23f-29f9-4a00-8488-409022d50b38.png',
        using: ['python', 'html'],
    },
    {
        id: 'shadow_weaving',
        title: 'shadow weaving',
        date: '2022-11-10',
        url: 'https://shelby.cool/shadow-weaving/',
        thumb: shadow_weaving_thumb,
        // using: ['d3', 'SVG'],
    },
    {
        id: 'field_of_flowers',
        title: 'field of flowers',
        date: '2022-10-24',
        url: 'https://shelby.cool/field-of-flowers/',
        thumb: field_of_flowers_thumb,
        using: ['d3', 'SVG'],
    },
    {
        id: 'css_tapestry',
        title: 'css tapestry',
        date: '2022-09-02',
        sketch: <CSSTapestry />,
        thumb: css_tapestry_thumb,
        wide: true,
        using: ['CSS'],
    },
    {
        title: 't9 textonyms',
        id: 'textonyms',
        date: '2022-10-04',
        desc: <p>A thesaurus of T9 textonyms.</p>,
        url: 'https://shelby.cool/textonyms',
        thumb: textonyms_thumb,
        using: ['Python', 'SVG'],
    },
    {
        title: 'sky sort',
        id: 'sky_sort',
        date: '2022-08-30',
        desc: <p>Experiments with pixel sorting.</p>,
        sketch: <PixelSort />,
        thumb: pixel_sort_thumb,
        url: '/sky-sort',
        using: ['Canvas'],
    },
    {
        title: "2022-04-10",
        id: "2022-04-10",
        date: "2022-04-10",
        desc: <p>Folding and unfolding.</p>,
        thumb: _2022_04_10_thumb,
        thumb_alt: 'Noisy dotted lines.',
        sketch: <Sketch_2022_04_10 />,
        using: ["d3"],
    },
    {
        title: "2022-02-22",
        id: "2022-02-22",
        date: "2022-02-22",
        desc: <p>A texture of gradients.</p>,
        thumb: _2022_02_22_thumb,
        thumb_alt: 'A grid of blue and white gradients',
        sketch: <Sketch_2022_02_22 />,
        using: ['CSS'],
    },
    {
        title: 'mat calculator',
        id: 'mat_calc',
        date: '2022-02-18',
        url: '/mat-calc',
        desc: <p>Use to create mats when framing various sized prints.</p>,
        thumb: mat_calc_thumb,
        thumb_alt: 'Diagram of mat dimensions.',
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
                <a href="/twenty-one-isometric-cubes" target="_blank">View full screen</a>.
            </p>
        </div>,
        using: ['SVG, SCSS, React.js'],
    },
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
        title: "Sunset squish",
        id: "2021-12-01",
        date: "2021-12-01",
        url: "/sunset-squish",
        sketch: <Sketch_2021_12_01 />,
        thumb: sunset_squish_thumb,
        thumb_alt: 'Illustrated sunset',
        using: ["HTML, SCSS"],
    },
    {
        title: "Cistercian numerals",
        id: "cistercian-numerals",
        desc: <p>A numbering system developed by 13th century monks. Each glyph represents an integer from 1 to 9,999.</p>,
        thumb: cistercian_numerals_thumb,
        thumb_alt: "A numbering system representing 1 + 4 = 5",
        date: "2021-06-26",
        using: ["SVG"],
        sketch: <CistercianNumerals />
    },
    {
        title: "jumble",
        id: "jumble",
        thumb: falling_letters,
        date: "2022-02-20",
        using: ["SVG"],
        sketch: <FallingLetters />
    },
    {
        title: "Pattern finder",
        id: "pattern-finder",
        desc: <p>Is there a pattern?</p>,
        url: "/pattern-finder",
        date: "2020-11-11",
        thumb: pattern_finder_thumb,
        thumb_alt: "Nested colorful squares",
    },
    {
        title: "monolith",
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
        title: "A Room with a Window",
        id: "room-with-a-window",
        desc: <p>A dark room gets progressively lighter each time the blinds are opened.</p>,
        thumb: room_with_a_window_thumb,
        thumb_alt: "A dark room and window with blinds. Light through the window creates shadows on the floor.",
        date: "2021-01-08",
        using: ["SCSS"],
        url: "/a-room-with-a-window",
    },
    {
        title: "windows",
        id: "windows",
        desc: <p>Various windows and coverings. Turn the light on, open the blinds.</p>,
        thumb: windows_thumb,
        thumb_alt: "The moon peaks through a windows blinds.",
        date: "2021-01-05",
        using: ["SCSS"],
        url: "/windows",
    },
    {
        title: "Follow field",
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
        title: "noise",
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
        title: "noise II",
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
        title: "stairs stars",
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