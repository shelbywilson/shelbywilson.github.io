import React from 'react';

import shelby from './../../../images/home/shelby.jpg';
import cup2 from './../../../images/still-life/cup-2.png';
import DecimalClock from './1010/DecimalClock';
import Window from './../../windows/Window';
import BlindsUp from './../../windows/coverings/BlindsUp';
import GlassUp from '../../windows/coverings/GlassUp';

export default () => {
    return (
        <div>
            <div className='img-container first'>
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

            <div style={{
                perspective: '1014px',
                transformStyle: 'preserve-3d',
                position: 'relative',
            }}>
                <div style={{display: 'flex', 
                    flexDirection: 'row', 
                    padding: '40px 20px 80px 20px', 
                    backgroundColor: 'rgb(121 78 0)', 
                    backgroundSize: '30px 30px',
                    transform: 'rotate3d(0, 1, 0, -45deg)',
                    backgroundImage: 'radial-gradient(circle, rgb(179 179 255) 1px, rgba(0, 0, 0, 0) 1px)'}}>
                    <div style={{position: 'relative', width: '100%', height: 450, }}>
                        <Window width={50}
                            widthUnits={'%'}
                            height={'100%'}
                            maxWidth={100}
                            maxWidthUnits='%'
                            >
                            <BlindsUp />
                        </Window>
                    </div>
                    {/* <div style={{position: 'relative', width: '50%'}}>
                        <Window width={200}
                            height={'100%'}
                            maxWidth={100}
                            maxWidthUnits='%'
                            >
                            <GlassUp />
                        </Window>
                    </div> */}
                </div>
                <div style={{
                    padding: '40px 20px 80px 20px', 
                    backgroundColor: 'rgb(121 78 0)', 
                    backgroundSize: '30px 30px',
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: '-70%',
                    top: 0,
                    transform: 'rotate3d(0, 1, 0, 45deg)',
                    backgroundImage: 'radial-gradient(circle, rgb(179 179 255) 1px, rgba(0, 0, 0, 0) 1px)'}}>
                
                </div>
                <div style={{
                    background: 'white',
                    width: '100%',
                    position: 'absolute',
                    height: '100%',
                    transform: 'rotateX(90deg) rotateZ(45deg)',
                    transformOrigin: 'top center',
                    // backgroundImage: 'radial-gradient(circle, rgb(5 37 28) 17px, rgb(239 255 45 / 0%) 11px)',
                    // backgroundSize: '40px 40px',
                    backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px),linear-gradient(to right, currentColor 1px, transparent 1px)',
                    backgroundSize: '25px 25px',
                }}>

                </div>
            </div>
        </div>
    )
}