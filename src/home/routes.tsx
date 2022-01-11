import React from 'react';

import stillLife_img from './../images/home/still-life.jpg';
import skyAboveClouds_img from './../images/home/sky-above-clouds.jpg';
import cloudtown_img from './../images/home/cloud-town.jpg';
import weavingpatterns_img from './../images/home/weaving-patterns.jpg';
import amandamodo_img from './../images/home/amandamodo.jpg';
import vurv_img from './../images/home/vurv.jpg';
import table_img from './../images/home/table.png';
import muriel_img from './../images/home/muriel-3.png';
import sfpcShowcase_img from './../images/home/1010.jpg';
import set_img from './../images/home/set.jpg';
import daffodils_img from './../images/home/daffodils.png';
import windows_img from './../images/home/windows.jpg';
import vases_img from './../images/sketches/thumbnails/vases_thumb.png';
import cafes_thumb from './../images/cafes/cafes_thumb.png';

import SkyAboveClouds from './content/SkyAboveClouds';
import StillLife from './content/StillLife';
import WeavingPatterns from './content/WeavingPatterns';
import SFPCShowcase from './content/SFPCShowcase';
import TableTwoWays from './content/TableTwoWays';
import CloudTown from './content/CloudTown';
import SetMeta from './content/SetMeta';
import Muriel from './content/Muriel';
import About from './content/About';
import Amandamodo from './content/Amandamodo';
import Vurv from './content/Vurv';
import Sketches from './content/Sketches';
import Gradients from '../pages/gradients';
import GradientsAbout from './content/GradientsAbout';

import UsingList from '../common/UsingList';
import GreyMatterSketch from '../pages/grey-matter/GreyMatterSketch';
import { pageTypes } from './types/page-types';
import GreyMatterMeta from './content/GreyMatterMeta';

export interface Route {
    id: string,
    url: string,
    title: string,
    type?: pageTypes,
    subtitle?: string,
    year?: number | string,
    content?: JSX.Element,
    alt?: string,
    img?: any,
    homeBanner?: JSX.Element,
    dark?: boolean,
    wide?: boolean,
}

export const getRouteById = (id: string) => {
    return routes.find(route => route.id === id) || {}
}

export const routes: Array<Route> = [
    {
        id: 'grey_matter',
        url: '/#/grey-matter',
        title: 'Grey Matter',
        dark: true,
        year: 2021,
        type: pageTypes.INSTALLATION,
        homeBanner: <GreyMatterSketch 
            parentBound={true}
            index={1}
            inverse={true}
            outline={false}
            />,
        content: <GreyMatterMeta />
    },
    {
        id: 'vases',
        url: '/vases',
        title: 'Vases',
        homeBanner: <div style={{padding: 50}}>
            <img src={vases_img} alt="Computer generated vases" />
        </div>,
        year: 2021,
        type: pageTypes.WEB_EXPERIMENT,
    },
    {
        id: 'daffodils',
        url: '/#/daffodils',
        img: daffodils_img,
        title: 'Daffodils',
        dark: true,
        content: <div>
            <iframe src='/daffodils?_no-header' 
                scrolling='no' 
                referrerPolicy='no-referrer' 
                loading='lazy'></iframe>
            <UsingList list={["Three.js"]} />
            <p>
                View <a href='/daffodils'>full screen</a>.    
            </p>
        </div>,
        year: 2021,
        type: pageTypes.WEB_EXPERIMENT,
        alt: "Computer generated daffodils against a dark background angled toward a bright light."
    },
    {
        id: 'gradients',
        url: '/#/gradients',
        title: 'gradients',
        dark: true,
        homeBanner: <Gradients />,
        content: <GradientsAbout />,
        year: 2021,
        type: pageTypes.WEB_EXPERIMENT,
    },
    {
        id: 'stillLife',
        img: stillLife_img,
        url: '/#/still-life',
        title: 'still life',
        dark: true,
        content: <StillLife />,
        year: 2020,
        type: pageTypes.WEB_EXPERIMENT,
        alt: "A still life of computer generated abstract fruit."
    },
    {
        id: 'skyAboveClouds',
        img: skyAboveClouds_img,
        url: '/#/sky-above-clouds',
        title: 'Sky Above Clouds',
        content: <SkyAboveClouds />,
        year: 2020,
        type: pageTypes.WEB_EXPERIMENT,
        alt: "Abstract clouds."
    },
    {
        id: 'cloudtown',
        img: cloudtown_img,
        url: '/#/cloud-town',
        title: 'cloud town',
        content: <CloudTown />,
        year: 2020,
        type: pageTypes.WEB_EXPERIMENT,
        alt: "Photos of clouds arranged into a 3D box shape."
    },
    {
        id: 'weavingpatterns',
        img: weavingpatterns_img,
        title: 'album of weaving patterns',
        url: '/#/album-of-weaving-patterns',
        content: <WeavingPatterns />,
        subtitle: 'альбомъ ткацихъ узоровъ',
        year: '2013, 2018',
        type: pageTypes.WEB_EXPERIMENT,
        alt: "Weaving diagrams."
    },
    {
        id: 'amandamodo',
        img: amandamodo_img,
        title: 'amandamodo',
        url: '/#/amandamodo',
        content: <Amandamodo />,
        year: '2019 – 2021',
        type: pageTypes.WEBSITE,
        alt: "Screenshot of portfolio website."
    },
    {
        id: 'vurv',
        img: vurv_img,
        title: 'vurvey',
        url: '/#/vurvey',
        dark: true,
        content: <Vurv />,
        year: '2018, 2019',
        type: pageTypes.DATA_VISUALIZATION,
    },
    {
        id: 'table',
        img: table_img,
        title: 'table two ways',
        url: '/#/table-two-ways',
        content: <TableTwoWays />,
        year: 2020,
        type: pageTypes.FURNITURE,
        alt: "Wooden side table made of birch."
    },
    {
        id: 'muriel',
        img: muriel_img,
        title: 'muriel',
        url: '/#/muriel',
        dark: true,
        year: 2019,
        content: <Muriel />,
        type: pageTypes.GRAPHICS_EXPERIMENT,
        alt: "Abstract colorful graphics."
    }, 
    {
        id: 'sfpcShowcase',
        img: sfpcShowcase_img,
        title: '1010',
        url: '/#/1010',
        content: <SFPCShowcase />,
        year: 2019,
        type: pageTypes.INSTALLATION,
        alt: "Installation mounted to the wall, using ligtbulbs behind a painted surface."
    },
    {
        id: 'set',
        img: set_img,
        title: 'set',
        url: '/#/set',
        year: 2020,
        content: <SetMeta />,
        type: pageTypes.GAME,
    },
    {
        id: 'sketches',
        title: 'sketches',
        url: '/#/sketches',
        content: <Sketches />,
        wide: true,
    },
    {
        id: 'windows',
        title: 'windows',
        url: '/windows',
        type: pageTypes.WEB_EXPERIMENT,
        img: windows_img,
    },
    {
        id: 'about',
        img: '',
        title: 'about',
        url: '/#/about',
        content: <About />,
        year: 'Last updated 10 January 2022',
    },
    {
        id: 'cafes',
        img: cafes_thumb,
        title: 'Seattle cafés',
        url: '/#/cafes',
        type: pageTypes.DATA_VISUALIZATION,
        content: <div>
            <div style={{transform: "scale(0.72)", transformOrigin: "top left", marginBottom: "-30%"}}>
                <iframe style={{width: "138%", height: 750, maxHeight: "100vh", borderRadius: "20px"}}
                    scrolling='yes' 
                    referrerPolicy='no-referrer' 
                    loading='lazy'
                    src="/cafes">
                </iframe>
            </div>
            <p>
                <a href="/cafes">View full</a>
            </p>
            <p>
                An informal ranking of Seattle area cafes among different metrics. 
            </p>
            <p>
                Contact Alex Miller to take the survey.
            </p>

            <UsingList list={["d3.js", "GeoJSON", "React.js"]} />
        </div>
        ,
        year: 2021,
    }
]