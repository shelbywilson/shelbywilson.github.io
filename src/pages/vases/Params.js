import React, { useState, Fragment } from "react";

export const Params = ({ update, state, randomize }) => {
	return (
        <div className="vases-params">
            <button type="button" onClick={randomize}>
                Random Vase
            </button>
            <label>
                <span>
                    sections 
                </span>
                <input type="range" min={1} max={9} step={1} value={state.sections} onChange={(e) => {
                    const val = parseInt(e.target.value, 10)
                    update({
                        sections: val,
                    })
                }}
                ></input>
            </label>
            <label>
                <span>
                    width 
                </span>
                <input type="range" min={30} max={200} step={1} value={state.w} onChange={(e) => {
                    const val = parseInt(e.target.value, 10)
                    update({
                        w: val,
                        cW: Math.min(val * 1.2, state.cW),
                        handleD: Math.min(val/2, state.handleD),
                        bH: Math.min(val/4, state.bH),
                    })
                }}
                ></input>
            </label>
            <label>
                <span>
                    height 
                </span>
                <input type="range" min={40} max={300} step={1} value={state.h} onChange={(e) => {
                    const val = parseInt(e.target.value, 10)
                    update({
                        h: val,
                        neckHeight: Math.min(val, state.neckHeight),
                    })
                }}
                ></input>
            </label>
            <label>
                <span>
                    neck height
                </span>
                <input type="range" min={0} max={state.h} step={1} value={state.neck} onChange={(e) => {
                    const val = parseInt(e.target.value, 10)
                    update({
                        neckHeight: val,
                    })
                }}
                ></input>
            </label>
            <label>
                <span>
                    neck width
                </span>
                <input type="range" min={0.2} max={1} step={0.01} value={state.neckWidth} onChange={(e) => {
                    const val = parseFloat(e.target.value)
                    update({
                        neckWidth: val,
                    })
                }}
                ></input>
            </label>
            <label>
                <span>
                    neck facets
                </span>
                <input type="range" min={4} max={24} step={1} value={state.r5} onChange={(e) => {
                    const val = parseInt(e.target.value, 10)
                    update({
                        r5: val,
                    })
                }}
                ></input>
            </label>
            <label>
                <span>
                    lip height 
                </span>
                <input type="range" min={0} max={100} step={1} value={state.cH} onChange={(e) => {
                    const val = parseInt(e.target.value, 10)
                    update({
                        cH: val,
                    })
                }}
                ></input>
            </label>
            {/* <label>
                <span>
                    lip width 
                </span>
                <input type="range" min={0} max={1} step={0.01} value={state.cW} onChange={(e) => {
                    const val = parseFloat(e.target.value)
                    update({
                        cW: val,
                    })
                }}
                ></input>
            </label> */}
            {/* <label>
                <span>
                    lip position 
                </span>
                <input type="range" min={0} max={1} step={0.01} value={state.mouthPos} onChange={(e) => {
                    const val = e.target.value
                    update({
                        mouthPos: val,
                    })
                }}
                ></input>
            </label> */}
            <label>
                <span>
                    flatten
                </span>
                <input type="range" min={0.1} max={1} step={0.05} value={state.flatness} onChange={(e) => {
                    const val = parseFloat(e.target.value, 10)
                    update({
                        flatness: val,
                    })
                }}
                ></input>
            </label>
            <label>
                <span>
                    longitudnal facets 
                </span>
                <input type="range" min={3} max={24} step={1} value={state.longFacets} onChange={(e) => {
                    const val = parseInt(e.target.value, 10)
                    update({
                        longFacets: val,
                    })
                }}
                ></input>
            </label>
            <label>
                <span>
                    latitudnal facets 
                </span>
                <input type="range" min={3} max={24} step={1} value={state.latFacets} onChange={(e) => {
                    const val = parseInt(e.target.value, 10)
                    update({
                        latFacets: val,
                    })
                }}
                ></input>
            </label>
            <label>
                <span>
                    foot height 
                </span>
                <input type="range" min={0} max={state.h/4} step={1} value={state.bH} onChange={(e) => {
                    const val = parseInt(e.target.value, 10)
                    update({
                        bH: val,
                    })
                }}
                ></input>
            </label>
            <label>
                <span>
                    foot width
                </span>
                <input type="range" min={0} max={2.5} step={0.01} value={state.baseWidth} onChange={(e) => {
                    const val = parseFloat(e.target.value)
                    update({
                        baseWidth: val,
                    })
                }}
                ></input>
            </label>
            <label>
                <span>
                    handles
                </span>
                <input type="checkbox" checked={state.handles} onChange={(e) => {
                    const val = e.target.checked;
                    update({
                        handles: val,
                    })
                }}
                ></input>
            </label>
            {state.handles &&
                <Fragment>
                    <label>
                        <span>
                            handle size 
                        </span>
                        <input type="range" min={0} max={state.w/6} step={0.5} value={state.handleD} onChange={(e) => {
                            const val = parseFloat(e.target.value)
                            update({
                                handleD: val,
                            })
                        }}
                        ></input>
                    </label>
                   <label>
                        <span>
                            handle position 
                        </span>
                        <input type="range" min={0} max={1} step={0.05} value={state.handlePos} onChange={(e) => {
                            const val = parseFloat(e.target.value)
                            update({
                                handlePos: val,
                            })
                        }}
                        ></input>
                    </label>
                    <label>
                        <span>
                            handle thickness 
                        </span>
                        <input type="range" min={2} max={10} step={0.2} value={state.handleThickness} onChange={(e) => {
                            const val = parseFloat(e.target.value)
                            update({
                                handleThickness: val,
                            })
                        }}
                        ></input>
                    </label>
                    <label>
                        <span>
                            handle facets 
                        </span>
                        <input type="range" min={4} max={23} step={1} value={state.handleFacets} onChange={(e) => {
                            const val = parseInt(e.target.value, 10)
                            update({
                                handleFacets: val,
                            })
                        }}
                        ></input>
                    </label>
                </Fragment>
            }
        </div>
    )
};

export default Params;