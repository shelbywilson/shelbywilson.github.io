import React from 'react';

export const LayersGradient = ({layers, state, getStyle}) => {
    return (
        <div className='gradients-layers-diagram gradients-layers' style={{height: layers.length * 70 + 275, position: 'relative'}}>
            {layers.map((color, i) => 
                <div key={`line_${i}`}
                    style={{
                        borderTop: `1px dashed #000`,
                        borderRight: i === 0 ? `1px dashed #000` : '',
                        borderLeft: i === 1 ? `1px dashed #000` : '',
                        width: 70,
                        position: 'absolute',
                        top: `${i * 70 + 124}px`,
                        left: `calc(50% - ${(i%2 === 0 ? -175 : 245)}px)`, 
                        height: i < 2 ? (layers.length/2 - 1) * 140 : 0,
                    }}>
                        {color !== 'base' && i < 2 &&
                            <div className="default-font" style={
                                {
                                    fontSize: '0.75rem',
                                    padding: '10px',
                                    position: 'absolute',
                                    left: i % 2 === 0 ? 'auto' : 0,
                                    right: i % 2 === 0 ? 0 : 'auto',
                                    textAlign: i % 2 === 0 ? 'right' : 'left'
                                }
                            }>
                                layer {1 + i%2}, fade {(i + state.opacity) % 2 === 0 ? 'in' : 'out'}
                            </div>
                        }
                </div>
            )}
            <div style={{
                    borderRight: `1px dashed #000`,
                    height: 70,
                    position: 'absolute',
                    top: `${(layers.length + 1) * 70 + 90}px`,
                    left: `calc(50% + 100px)`, 
                }}>
                    <div className="default-font" style={
                        {
                            fontSize: '0.75rem',
                            width: 50,
                            padding: '10px',
                            margin: '0 auto',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            whiteSpace: 'nowrap',
                        }
                    }>
                        base color
                    </div>
            </div>
            {['base', ...layers.map((l, i) => layers[layers.length - i - 1])].map((color, i) => {
                const style = getStyle(color === 'base' ? 'base' : i, color, true);
                return (
                    <div key={`layer_${i + 1}`}
                        style={{
                            height: 250,
                            width: 250,
                            top: `${i * -250 + ((layers.length - i) * 70)}px`,
                            position: 'relative',
                            margin: '0 auto',
                        }}>
                        <div style={{
                                height: '100%',
                                width: '100%',
                                transform: `rotateX(60deg) rotateZ(45deg)`,
                                border: `1px solid rgba(0,0,0,${Math.max(color === 'base' ? 1 : style.opacity, 1)})`,
                                transition: `border ${state.interval}ms`,
                                position: 'relative',
                            }}>
                            <div style={{...style, width: '100%', height: '100%', position: 'absolute'}}>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default LayersGradient;