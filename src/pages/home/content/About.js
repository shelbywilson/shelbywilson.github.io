import React from 'react';

import shelby from './../../../images/home/shelby.jpg';
import cup2 from './../../../images/still-life/cup-2.png';
import DecimalClock from './1010/DecimalClock';
import Window from './../../windows/Window';
import GlassUp from './../../windows/coverings/GlassUp';

export default () => {
    return (
        <div>
            <div className='img-container-padded first'>
                <a href='https://github.com/shelbywilson/sfpc-rtp/tree/master/lillian'
                    target='_blank'>
                        <figure>
                            <img src={shelby} alt='Shelby' />
                        </figure>
                </a>
                <p style={{display: 'flex', justifyContent: 'space-between', margin: '60px 0'}}>
                    <a href='mailto:s.wilson024@gmail.com'>Email</a>
                    <a href='https://github.com/shelbywilson' target='_blank'>Github</a>
                    <a href='https://www.are.na/shelby-wilson' target='_blank'>Are.na</a>
                </p>
            </div>

            <figure style={{margin: '0 auto'}}>
                <a href='/#/still-life'>
                    <img style={{height: 260}} src={cup2} alt='glass with strawberries'/>
                </a>
            </figure>

            <a href='/#/1010'>
                <DecimalClock />
            </a>

            {/* <div style={{
                perspective: '1014px',
                transformStyle: 'preserve-3d',
                position: 'relative',
            }}>
                <div style={{display: 'flex', 
                    flexDirection: 'row', 
                    padding: '40px 20px 80px 20px'}}>
                    <div style={{position: 'relative', width: '100%', height: 450, }}>
                        <Window width={50}
                            widthUnits={'%'}
                            height={'100%'}
                            maxWidth={100}
                            maxWidthUnits='%'
                            >
                             <BlindsUp /> 
                            <GlassUp />
                            <a href='/#/about'>
                                test
                            </a>
                        </Window>
                    </div> */}
                    {/* <div style={{position: 'relative', width: '50%'}}>
                        <Window width={200}
                            height={'100%'}
                            maxWidth={100}
                            maxWidthUnits='%'
                            >
                            <GlassUp />
                        </Window>
                    </div> */}
                {/* // </div> */}
            {/* </div> */}
        </div>
    )
}