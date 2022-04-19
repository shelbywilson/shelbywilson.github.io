import React from 'react';

import DecimalClock from './1010/DecimalClock';

import full from './../../images/home/1010.jpg';
import full1 from './../../images/1010/full-1.jpg';
import full2 from './../../images/1010/full-2.jpg';
import progress1 from './../../images/1010/progress-1.jpg';
import progressMotors from './../../images/1010/progress-motors.jpg';
import progressArduino from './../../images/1010/progress-arduino.jpg';
import progressPaint1 from './../../images/1010/progress-paint-1.jpg';
import progressPaint2 from './../../images/1010/progress-paint-2.jpg';
import progressLamp from './../../images/1010/progress-lamp.jpg';
import schematic from './../../images/1010/schematic.jpg';
import gearsOnWall from './../../images/1010/gears-on-wall-still.png';
import gearsOnWall2 from './../../images/1010/gears-on-wall-still-2.jpg';
import candles from './../../images/1010/candles.png';
import gearsVideo from './../../images/1010/gears-2-slow-compressed.mp4';
import gearsVideoStill from './../../images/1010/gears-video-still.jpg';

export const SFPCShowcase = () => {
    return (
        <div>
            <figure className='img-container-padded first' style={{marginTop: 0}}>
                <img src={full} alt='full installation mounted on wall with a shelf of lit candles and horseradish root below'/>
                <figcaption>
                    <a href='https://www.filipwolak.com/' target='_blank' rel="noreferrer">Photo by Filip Wolak</a>
                </figcaption>
            </figure>          
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
                Exhibited at SFPC Fall 2019 Showcase, New York, NY.
            </p>
            <p>
                Covered by&nbsp;
                <a href='https://www.creativeapplications.net/education/sfpc-fall-2019-student-showcase/' target='_blank'>
                    Creative Applications
                </a>.
            </p>
            <p>
                Materials: incandescent lightbulbs, thermochromic pigment, acrylic medium, stepper motors, arduino, candles, horseradish root
            </p>
            <iframe style={{margin: '10vh auto 0 auto'}} src="https://player.vimeo.com/video/384268866" width="640" height="480" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
            <p>
                View <a href='https://vimeo.com/384268866' target='_blank'>timelapse</a>, shot by <a href='https://estherbouquet.com' target='_blank'>Esther Bouquet</a> and edited by <a href='https://dgarfield.co/' target='_blank'>Danny Garfield</a>.
            </p>
            <figure className='img-container-padded'>
                <img src={progress1} alt='A plexiglass surface painted with thermochromic (heat-reactive) paint, held by a hand. The lightened area is a reaction from heat created by a lightbulb and will return to its original, darker color as it cools.'/>
                <figcaption>
                    A plexiglass surface painted with thermochromic (heat-reactive) pigment. The lightened area is a reaction from heat created by a lightbulb and will return to its original, darker color as it cools.
                </figcaption>
            </figure>
            <figure className='img-container-padded'>
                <img src={progressPaint1} alt='painted surface with lightbulb above'/>
                <figcaption>
                    Experiments with different mixtures of pigment and acrylic medium.
                </figcaption>
            </figure>
            <figure className='img-container-padded'>
                <img src={progressPaint2} alt='painted surface with lightbulb beneath' />
                <figcaption>
                    Testing opacity and reactivity.
                </figcaption>
            </figure>
            <figure className='img-container-padded'>
                <img src={progressLamp} alt='lamp and hand' />
            </figure>
            <figure className='img-container-padded'>
                <img src={progressArduino} alt='two arduinos with wires' />
                <figcaption>
                    Two arduinos connected to stepper motor drivers were programmed to rotate gears at different speeds. One represented a decimal hour, lowering or raising a lightbulb the length of the panel once every 144 minutes, while the other did the same over 10 decimal minutes, or 14.4 minutes.
                </figcaption>
            </figure>
            <figure className='img-container-padded'>
                <img src={progressMotors} alt='motors' />
                <figcaption>
                    The arduinos were connected to motors. Gears made from foamcore and electric tape were then mounted onto the motors.
                </figcaption>
            </figure>
            <figure className='img-container-padded'>
                <img src={schematic} alt='hand drawn schematic' />
            </figure>
            <figure className='img-container-padded'>
                <img src={gearsOnWall2} alt='gears on wall' />
                <figcaption>
                    Gears, motors, and artduinos mounted to the wall.
                </figcaption>
            </figure>

            <figure className='img-container-padded'>
                <img src={gearsOnWall} alt='gears and lightbulbs mounted to wall'/>
                <figcaption>
                    Lightbulbs wired with a precise length of lampwire were draped over the gears. A counterweight made of brass fixtures prevented the lightbulbs from slipping. 
                </figcaption>
            </figure>

            {window.innerWidth < 767 ?
                <figure className='img-container-padded'>
                    <img src={gearsVideoStill} alt='gears and lightbulbs mounted to wall'/>
                </figure>
            :
                <div className='img-container-padded' style={{height: 520}}>
                    <video autoPlay='autoplay' loop={true} muted={true}>
                        <source src={gearsVideo} type="video/mp4" />
                        <img src={gearsVideoStill} alt='gears and lightbulbs mounted to wall'/>
                    </video>
                </div>
            }
            <figure className='img-container-padded'>
                <img src={full1} alt='full installation and two people pointing'/>
                <figcaption>
                   The final plexiglass panel painted with thermochromic pigment was mounted on top of the lightbulbs and gears.
                </figcaption>
            </figure>
            <figure className='img-container-padded'>
                <img src={candles} alt='lit candles and horseradish root' />
                <figcaption>
                    Candles (wax) and horseradish root were placed on an altar below the installation.
                </figcaption>
            </figure>
            <figure className='img-container-padded'>
                <img src={full2} alt='full installation and one person looking'/>
            </figure>
        </div>
    )
}

export default SFPCShowcase;