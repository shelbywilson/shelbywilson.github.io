import React from 'react';

import stillLife from './../images/home/still-life.jpg';
import skyAboveClouds from './../images/home/sky-above-clouds.jpg';
import cloudtown from './../images/home/cloud-town.jpg';
import weavingpatterns from './../images/home/weaving-patterns.jpg';
import amandamodo from './../images/home/amandamodo.jpg';
import vurv from './../images/home/vurv.jpg';
import table from './../images/home/table.png';
import muriel from './../images/home/muriel-3.png';
import sfpcShowcase from './../images/home/1010.jpg';
import set from './../images/home/set.jpg';
import windows from './../images/home/windows.jpg';
import daffodils from './../images/home/daffodils.png';

import SkyAboveClouds from './content/SkyAboveClouds';
import StillLife from './content/StillLife';
import WeavingPatterns from './content/WeavingPatterns';
import SFPCShowcase from './content/SFPCShowcase';
import TableTwoWays from './content/TableTwoWays';
import CloudTown from './content/CloudTown';
import Set from './content/Set';
import Muriel from './content/Muriel';
import About from './content/About';
import Amandamodo from './content/Amandamodo';
import Vurv from './content/Vurv';
import Sketches from './content/Sketches';
import Windows from './../pages/windows/Windows';
import Gradients from './../pages/gradients';
import GradientsAbout from './content/GradientsAbout';

export const routes = {
    daffodils: {
        id: 'daffodils',
        url: '/#/daffodils',
        img: daffodils,
        title: 'Daffodils',
        dark: true,
        using: [
            "Three.js",
        ],
        content: <div>
            <iframe src='/daffodils?_no-header' 
                scrolling='no' 
                referrerPolicy='no-referrer' 
                loading='lazy'></iframe>
            <p>
                Using: Three.js
            </p>
            <p>
                View <a href='/daffodils'>full screen</a>.    
            </p>
        </div>,
        year: 2021,
        type: 'web experiment',
    },
    gradients: {
        id: 'gradients',
        url: '/#/gradients',
        title: 'gradients',
        dark: true,
        homeBanner: <Gradients />,
        content: <GradientsAbout />,
        year: 2021,
        type: 'web experiment',
    },
    stillLife: {
        id: 'stillLife',
        img: stillLife,
        url: '/#/still-life',
        title: 'still life',
        dark: true,
        content: <StillLife />,
        year: 2020,
        type: 'web experiment',
    },
    skyAboveClouds: {
        id: 'skyAboveClouds',
        img: skyAboveClouds,
        url: '/#/sky-above-clouds',
        title: 'Sky Above Clouds',
        content: <SkyAboveClouds />,
        year: 2020,
        type: 'web experiment',
    },
    cloudtown: {
        id: 'cloudtown',
        img: cloudtown,
        url: '/#/cloud-town',
        title: 'cloud town',
        content: <CloudTown />,
        year: 2020,
        type: 'web experiment',
    },
    weavingpatterns: {
        id: 'weavingpatterns',
        img: weavingpatterns,
        title: 'album of weaving patterns',
        url: '/#/album-of-weaving-patterns',
        content: <WeavingPatterns />,
        subtitle: 'альбомъ ткацихъ узоровъ',
        year: '2013, 2018',
        type: 'web experiment',
    },
    amandamodo: {
        id: 'amandamodo',
        img: amandamodo,
        title: 'amandamodo',
        url: '/#/amandamodo',
        content: <Amandamodo />,
        year: '2019 – 2021',
        type: 'website',
    },
    vurv: {
        id: 'vurv',
        img: vurv,
        title: 'vurvey',
        url: '/#/vurvey',
        dark: true,
        content: <Vurv />,
        year: '2018, 2019',
        type: 'data visualization',
    },
    table: {
        id: 'table',
        img: table,
        title: 'table two ways',
        url: '/#/table-two-ways',
        content: <TableTwoWays />,
        year: 2020,
        type: 'furniture',
    },
    muriel: {
        id: 'muriel',
        img: muriel,
        title: 'muriel',
        url: '/#/muriel',
        dark: true,
        year: 2019,
        content: <Muriel />,
        type: 'graphics experiment',
    }, 
    sfpcShowcase: {
        id: 'sfpcShowcase',
        img: sfpcShowcase,
        title: '1010 (wax and horseradish)',
        url: '/#/1010',
        content: <SFPCShowcase />,
        year: 2019,
        type: 'installation',
    },
    set: {
        id: 'set',
        img: set,
        title: 'set',
        url: '/#/set',
        year: 2020,
        content: <Set />,
        type: 'web game',
    },
    sketches: {
        id: 'sketches',
        img: windows,
        title: 'sketches',
        url: '/#/sketches',
        content: <Sketches />,
        type: 'web experiments',
    },
    about: {
        id: 'about',
        img: '',
        title: 'about',
        url: '/#/about',
        content: <About />,
        year: 'Last updated 24 Apr 2021',
    },
}

export const sketches = [
    {
        id: 'windows1',
        img: windows,
        title: '⊞ □ ⊞ □ ⊞',
        url: '/#/sketches/windows',
        content: <Windows />
    }
]