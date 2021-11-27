import React from 'react';
import UsingList from '../../common/UsingList';
import gallery_install from './../../images/grey-matter/gallery_install.jpg';
export default () => {
    return (
        <div>
            <p>
                Two procedurally generated animations <i>Threshold</i> and <i>In Tangent</i>, made in collaboration with <a href="https://www.betsykenyon.com/grey-matter" target="_blank" rel="noopener noreferrer nofollow">Betsy Kenyon</a>. They were installed as part of <a href="https://art.unc.edu/event/john-and-june-allcott-gallery-betsy-kenyon-grey-matter/" target="_blank" rel="noopener noreferrer nofollow">Grey Matter</a>, shown from Nov 5 - Dec 3, 2021.
            </p>
            <p>
                To create these animations I referenced Betsy's work, in particular her Contact series. Then using code, I imagined the movement they might make. <i>In Tangent</i> transitions between several of these pieces, from circle to square and back to circle. <i>Threshold</i> is a grid of nine, each animated at a different speed. They diverge and re-sync for moments of symmetry. 
            </p>
             <figure>
                <a href="images/grey-matter/gallery_install.jpg" target="_blank">
                    <img src={gallery_install} alt='Full view of gallery; analog work bookended by digital, projected animations.'/>
                </a>
                <figcaption>
                    Installation at the John and June Allcott Gallery, Chapel Hill, NC
                </figcaption>
            </figure>
            <p>
                This collaboration became a dialog between analog and digital work. Betsy's analog pieces are each unique, made by hand in a darkroom, without negatives or the possibility of replication. Digital work by nature, however, can be duplicated. The projectors in the gallery are connected to computers running the exact same code as the <a href='/grey-matter' target="_blank">companion website</a>.
            </p>
            <p>
                While complementary, the animations also serve as counterpoints to Betsy's work. They are light projected, rather than captured; they are every moment in a timeline rather than a single frame.
            </p>
            <iframe src="https://player.vimeo.com/video/648829294" 
                className="vimeo-iframe"
                width="640" 
                height="348" 
                frameBorder="0" 
                allow="autoplay; fullscreen" 
                style={{height: '348px'}}
                allowFullScreen></iframe>
            <p>
                <a href='/grey-matter' target="_blank">View full screen companion website</a>. Click on a title, outline, or invert to change modes:
            </p>
            <iframe src="/grey-matter/#/in-tangent" 
                className="website-iframe"
                scrolling='no' 
                style={{outline: '1px solid #000', height: 640}}
                referrerPolicy='no-referrer' 
                loading='lazy'></iframe>
            <UsingList list={["p5.js", "projectors"]} />
           
        </div>
    )
}