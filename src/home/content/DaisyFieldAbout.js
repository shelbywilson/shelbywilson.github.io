import React from 'react';
import { getTechnologies } from '../routes';
import UsingList from '../../common/UsingList';
// import img_daisy_field from './../../images/daisy-field/daisy-field.jpeg';
import img_daisy_field_2 from './../../images/daisy-field/daisy-field-2.jpeg';
import img_trackpad from './../../images/daisy-field/trackpad.jpeg';
// import img_trackpad_2 from './../../images/daisy-field/trackpad-2.jpeg';

export const DaisyFieldAbout = () => {
    return (
        <div>
            <p>
                <em>Daisy Field</em> is an interactive, procedurally generated piece originally shown at <a href="https://www.eventbrite.com/e/fresh-hydrangea-tickets-346395727947">Fresh Hydrangea New Media Art Show</a> in Seattle, WA on June 9, 2022. 
            </p>
            <div style={{margin: '3rem 0'}}>
                <iframe src="https://shelby.cool/daisy-field/" ></iframe>
            </div>
            <p>
                <a href="/daisy-field">View full screen.</a>
            </p>
            <p>
                Running in browser (as above), digital daisies were projected onto a 10'x20' wall. Viewers were invited to interact using the trackpad to move the light, which the digital daisies follow.
            </p>
            <p>
                I'm very much inspired by the abundance and variety of flora in Washington, and by natural forms in general. This piece is a variation of <a href="/daffodils" target="_blank">Daffodils</a> (2021).
            </p>
            <div style={{margin: '3rem 0'}}>
                <iframe src="https://player.vimeo.com/video/742067233?h=3f59d8fc42&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameBorder="0" allow="autoplay; picture-in-picture" allowFullScreen title="Daisy Field"></iframe>
            </div>
            <figure style={{margin: '3rem 0'}}>
                <div>
                    <img src={img_trackpad} alt="Trackpad decorated with fresh daisies" />
                </div>
                <figcaption>
                    Bluetooth trackpad decorated with fresh Shasta daisies
                </figcaption>
            </figure>
            <figure style={{margin: '3rem 0'}}>
                <div style={{maxHeight: 650, overflow: 'hidden', borderRadius: '100%', margin: '0 auto'}}>
                    <img src={img_daisy_field_2} alt="A field of large daisies" />
                </div>
                <figcaption>
                    Daisies on San Juan Island, summer 2022
                </figcaption>
            </figure>
            <UsingList list={getTechnologies('daisy_field')}/>
        </div>
    )
}

export default DaisyFieldAbout;