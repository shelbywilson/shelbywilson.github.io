import React from 'react';

import final from './../../../images/papier-mache/plant-stand-1/plant-stand-1.jpg';
import process1 from './../../../images/papier-mache/plant-stand-1/process-1.jpg';
import process2 from './../../../images/papier-mache/plant-stand-1/process-2.jpg';
import process3 from './../../../images/papier-mache/plant-stand-1/process-3.jpg';
import process4 from './../../../images/papier-mache/plant-stand-1/process-4.jpg';

export default () => {
    return (
        <div>
            <p>
                After moving I have a lot of cardboard boxes and packing paper lying around and I wanted to make something with them. I also have a lot of plants on the floor. This is a first attempt/prototype at making a papier mâché plant stand.
            </p>
            <figure style={{margin: "5rem 3rem"}}>
                <img src={final} alt='photo papier mâché plant stand with small tree on top' />
                <figcaption>
                    Plant stand in its current state.
                </figcaption>
            </figure>
            <p>
                The main structure is made from a cardboard box stuffed with packing paper. It is covered in three layers of paper strips, each layer applied after the previous was fully dry. I really like to work with my hands, and I like how tactile this process is. 
            </p>
            <p>
                I'm pretty happy with the result. It's sturdy and holds quite a bit of weight. I'm (slowly) looking into how best to seal it and thinking about how/if I want to paint it. 
            </p>
            <p>
                It is currently supporting a <em>Ficus benjamina</em>, which requires relatively little water and won't damage the table with moisture.
            </p>
            <p>
                I used this recipe for the glue: 
            </p>
            <ol>
                <li>
                    Boil 1 cup water.
                </li>
                <li>
                    Combine &#188; cup flour and &#188; cup water into a slurry.
                </li>
                <li>
                    Drizzle slurry into boiling water and whisk for a couple of minutes until thickened.
                </li>
                <li>
                    Let cool before using.
                </li>
            </ol>
            <p>
                For the next version:
            </p>
            <ol>
                <li>
                    Pack more material into the box to prevent bowing.
                </li>
                <li>
                    Try a different, non-plastic tape when constructing the cardboard structure. I only had plastic tape and I don't like that it's not biodegradable. This glue also doesn't stick very well to the plastic tape.
                </li>
                <li>
                    Reinforcing legs with hot glue and strips of cardboard to begin with. 
                </li>
            </ol>

            <figure style={{margin: "5rem 3rem"}}>
                <img src={process1} alt='cardboard structure' />
                <figcaption>
                    Cardboard structure.
                </figcaption>
            </figure>
            <figure style={{margin: "5rem 3rem"}}>
                <img src={process2} alt='cardboard structure' />
                <figcaption>
                    Reinforcing the legs of the table.
                </figcaption>
            </figure>
            <figure style={{margin: "5rem 3rem"}}>
                <img src={process3} alt='plant stand on floor with jade tree on top' />
                <figcaption>
                    Weight test after first layer.
                </figcaption>
            </figure>
            <figure style={{margin: "5rem 3rem"}}>
                <img src={process4} alt='green table' />
                <figcaption>
                    The second layer is some nice green paper from an REI order.
                </figcaption>
            </figure>
        </div>
    )
}