import React from 'react';
import LayersDiagram from './LayersDiagram';
import TransitionChart from './TransitionChart';
import TransitionChartTwo from './TransitionChartTwo';
import InteractiveGradients from './index-2';

export default ({layers, state, getStyle}) => {
    return (
        <div className='gradients-explanation'>
            <p>
                Gradients created with CSS cannot be animated, meaning an HTML element styled with a gradient background cannot gradually transition from one gradient to another over time.  Other CSS properties, however, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties" target="_blank">can be animated</a>. The method described below leverages opacity and solid backgrounds to create the appearance of smoothly transitioning gradients, using stacked layers that fade in and out.
            </p>
            <LayersDiagram layers={[layers[0], layers[1]]}
                state={state}
                getStyle={getStyle}
                />
            <p>
                These layered gradients are partially transparent and are stacked on top of a single base layer, a solid color that continously transitions to the next color. This creates a seemless animation between gradients.
            </p>

            <TransitionChart />

            <p>
                Layers have alternating cycles of opacity. When a layer is fully transparent, a new gradient style is applied to the hidden layer. 
            </p>

            <TransitionChartTwo />
        
            <p>
                While one layer fades in, the other fades out so that at any time the sum of the two layers' opacity is 1.
            </p>


            <p>
                Without timing new gradients with a layer's opacity, there is no easing between states. Each new gradient appears immediately:
            </p>

            <div style={{width: 260, height: 260, position: 'relative', margin: '60px auto', border: '1px solid #000'}}>
                <div style={{...getStyle(state.opacity, layers[state.opacity]), opacity: 1, zIndex: 1, position: 'absolute', height: '100%', width: '100%'}}>
                </div>
                <div style={{...getStyle((state.opacity + 1)%2, layers[(state.opacity + 1)%2]), opacity: 1, zIndex: 2, position: 'absolute', height: '100%', width: '100%'}}>
                </div>
                <div style={{...getStyle('base', state.base), transition: 'none', position: 'absolute', height: '100%', width: '100%'}}>
                </div>
            </div>

            <p>
                Any number of gradients layers can be added:
            </p>

            <LayersDiagram layers={layers}
                state={state}
                getStyle={getStyle}
                />

            <div style={{position: 'relative', marginTop: 60}}>
                <InteractiveGradients
                    />
            </div>
            <p>
                View <a href='/gradients/2.html'>interactive version</a>.    
            </p>
        </div>
    )
}