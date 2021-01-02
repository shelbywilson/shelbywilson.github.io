import React from 'react';

import DecimalClock from './1010/DecimalClock';

import full from './../../../images/home/1010.jpg';
import full1 from './../../../images/1010/full-1.jpg';
import full2 from './../../../images/1010/full-2.jpg';
import progress1 from './../../../images/1010/progress-1.jpg';
import progressMotors from './../../../images/1010/progress-motors.jpg';
import progressArduino from './../../../images/1010/progress-arduino.jpg';
import progressPaint1 from './../../../images/1010/progress-paint-1.jpg';
import progressPaint2 from './../../../images/1010/progress-paint-2.jpg';
import progressLamp from './../../../images/1010/progress-lamp.jpg';
import schematic from './../../../images/1010/schematic.jpg';
import gearsOnWall from './../../../images/1010/gears-on-wall-still.png';
import gearsOnWall2 from './../../../images/1010/gears-on-wall-still-2.jpg';
import candles from './../../../images/1010/candles.png';
import gearsVideo from './../../../images/1010/gears-2-slow-compressed.mp4';
import gearsVideoStill from './../../../images/1010/gears-video-still.jpg';

export default () => {
    return (
        <div>
            <div className='img-container first' style={{marginTop: 0, marginBottom: '20vh'}}>
                <img src={full} alt='full installation mounted on wall with a shelf of lit candles and horseradish root below'/>
            </div>          
            <p>
                A clock representing decimal time — a timekeeping system in which each day consists of 10 hours, each hour consists of 100 minutes, and each minute consists of 100 seconds. 
            </p>
            <DecimalClock />
            <p>
                Two incandescent lightbulbs cycle up and down at the rate of one decimal minute and ten decimal seconds, respectively. In front of these, an acrylic sheet painted with thermochromic pigment temporarily turns white as it heats up. The objects on the lower altar are a nod to the <a href='https://en.wikipedia.org/wiki/French_Republican_calendar' target='_blank'>French Republican calendar</a>, which designated a name from the rural economy for each day. Originally shown on December 1 and 2, or <a href='https://en.wikipedia.org/wiki/French_Republican_calendar#Autumn' target='_blank'>Frimaire</a> 11 and 12 — Wax and Horseradish.
            </p>
            <p>
                The name '1010' refers to 1010<sub>2</sub> (binary) and the equivalent 10<sub>10</sub> (base-10). In addition, clock and watchmaters often <a href='https://en.wikipedia.org/wiki/Clock_face#Stylistic_development' target='_blank'>default to 10:10</a>.
            </p>

            <p>
                View <a href='https://vimeo.com/384268866' target='_blank'>timelapse</a>, shot by <a href='https://estherbouquet.com' target='_blank'>Esther Bouquet</a> and edited by <a href='https://dgarfield.co/' target='_blank'>Danny Garfield</a>.
            </p>
            <p>
                Exhibited at SFPC Fall 2019 Showcase, New York, NY.
            </p>
            <p>
                Covered by&nbsp;
                <a href='https://www.creativeapplications.net/education/sfpc-fall-2019-student-showcase/' target='_blank'>
                    Creative Applications.
                </a>
            </p>
            <p>
                Materials: incandescent lightbulbs, thermochromic pigment, acrylic medium, stepper motors, arduino, candles, horseradish root
            </p>
            <div className='img-container'>
                <img src={progress1} alt='painted surface held by hand'/>
            </div>
            <div className='img-container'>
                <img src={progressPaint1} alt='painted surface with lightbulb above'/>
            </div>
            <div className='img-container'>
                <img src={progressPaint2} alt='painted surface with lightbulb beneath' />
            </div>
            <div className='img-container'>
                <img src={progressLamp} alt='lamp and hand' />
            </div>
            <div className='img-container'>
                <img src={progressArduino} alt='two arduinos with wires' />
            </div>
            <div className='img-container'>
                <img src={progressMotors} alt='motors' />
            </div>
            <div className='img-container'>
                <img src={schematic} alt='hand drawn schematic' />
            </div>
            <div className='img-container'>
                <img src={gearsOnWall2} alt='gears on wall' />
            </div>

            <div className='img-container' style={{height: 520}}>
                <video autoPlay='autoplay' loop={true} muted={true}>
                    <source src={gearsVideo} type="video/mp4" />
                    <img src={gearsVideoStill} alt='gears and lightbulbs mounted to wall'/>
                </video>
            </div>

            <div className='img-container'>
                <img src={gearsOnWall} alt='gears and lightbulbs mounted to wall'/>
            </div>
            <div className='img-container'>
                <img src={full1} alt='full installation and two people pointing'/>
            </div>
            <div className='img-container'>
                <img src={candles} alt='lit candles and horseradish root' />
            </div>
            <div className='img-container'>
                <img src={full2} alt='full installation and one person looking'/>
            </div>
        </div>
    )
}