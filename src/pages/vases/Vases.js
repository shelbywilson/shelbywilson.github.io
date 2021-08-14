import React, { useState, Fragment } from "react";
import Params from './Params';
import Sketch from "react-p5";

import './_vases.scss';

export const Vases = (props) => {
    const getParams = (singleSection = false) => {
        const w = Math.ceil(Math.random() * 150) + 50;
        const sections = singleSection ? 1 : Math.random() < 0.6 ? 1 : Math.ceil(Math.random() * 4);
        const h = Math.ceil(Math.random() * 200 * (sections === 1 ? 0.5 : 1)) + 80;
        const flatness = (Math.random() * 0.5) + 0.5;
        return {
            longFacets: Math.ceil(Math.random() * 22) + 2,
            latFacets: Math.ceil(Math.random() * 22) + 2,
            flatness,
            handlePos: 0.5,
            r5: Math.ceil(Math.random() * 21) + 3,
            w,
            sections,
            h,
            cH: Math.min(h/sections, Math.ceil(Math.random() * 50)) + 8,
            cW: Math.random(),
            bH: (Math.random() * h/6),
            baseWidth: 1 + Math.random(),
            handles: Math.random() > 0.6,
            handleThickness: h/25,
            handleFacets: Math.ceil(Math.random() * 20) + 4,
            handleD: Math.ceil(Math.random() * w/6) + 10,
            neckWidth: (Math.random() * 0.4) + 0.6,
            neckHeight: Math.ceil(Math.random() * 100),
            mouthPos: 0.5,
            handleRotate: Math.floor(Math.random() * 181),
        }
    }

    const [state, setState] = useState(getParams(true))
    const [camera, setCamera] = useState({x: 15, y: 0})
    const [material, setMaterial] = useState({wireframe: true, shiny: false, shininess: 1, opacity: 1})

	const setup = (p5, canvasParentRef) => {
        p5.createCanvas(window.innerWidth, window.innerHeight - (window.innerWidth < 768 ? 100 : 0), p5.WEBGL).parent(canvasParentRef);
	};

	const draw = (p5) => {
        const {longFacets, latFacets, flatness, handlePos, r5, h, w, sections, handleRotate, cH, bH, baseWidth, handles, handleThickness, handleD, handleFacets, neckHeight, neckWidth, mouthPos} = state;
        p5.background(255);

        if (window.innerWidth < 768) {
            p5.translate(0, 0, -180);
        }

        if (material.wireframe) {
            p5.stroke(0, 0, 255)
            p5.fill(255)
        } else {
            p5.noStroke();
            if (!material.shiny) {
                p5.ambientMaterial(190, 243, 255, material.opacity * 255);
            } else {
                p5.shininess(19 - material.shininess);
                p5.specularMaterial(190, 243, 255, material.opacity * 255);
            }

            p5.ambientLight(60, 60, 80);
            p5.pointLight(90 * (material.shiny ? 1 : 2.5), 0, 90 * (material.shiny ? 1 : 2.5), 20, 40, 300);
            p5.pointLight(90 * (material.shiny ? 1 : 2.5), 90 * (material.shiny ? 1 : 2.5), 0, 400, 0, 300);
        }
    
        p5.angleMode(p5.DEGREES)
        
        let hSection = (h * (sections === 1 ? 0.6 : 1)) / sections;
        let i = 0;
        
        p5.push();

        p5.translate(window.innerWidth > 767 ? 40 : 0, -h/2, 60)
        p5.rotateX(360 - camera.x);
        p5.rotateY(camera.y + (p5.frameCount * 0.04));
        const minSectionWidth = Math.min(w, w * (1/sections * flatness))
        if (cH > 0) {
            let coneR = (minSectionWidth * neckWidth)/2;
            p5.push();
                p5.translate(0, -neckHeight/2 - (cH/2) + (cH * mouthPos), 0)
                p5.cone(coneR * 2, cH, r5, 1, 0);
            p5.pop();
        }
        if (neckHeight > 0) {
            p5.push();
                p5.cylinder(neckWidth * minSectionWidth * 0.5, neckHeight - 1, r5, 1, false, false);
            p5.pop();
        }
        while(i < sections) {
            p5.translate(0, hSection, 0);
            if (longFacets === 2) {
                p5.box(w * (i + 1)/sections, hSection * 2, Math.min(w, w * (i + 1)/sections * flatness))
            } else {
                p5.ellipsoid(w * (i + 1)/sections, hSection, Math.min(w, w * (i + 1)/sections * flatness), longFacets, latFacets)
            }
            if (i === sections - 1 && handles) {
                p5.push()
                    p5.translate(0, -(handlePos - 0.4) * (h - handleD) - handleThickness, 0)
                    p5.push()
                        if (longFacets === 2) {
                            p5.translate(w/4, 0)
                        }
                        p5.translate(-(w * 0.75) - (handleD/2 + handleThickness), 0)
                        p5.rotateX(handleRotate)
                        p5.torus(handleD * 2, handleThickness, handleFacets)
                    p5.pop()
                    p5.push()
                        if (longFacets === 2) {
                            p5.translate(-w/4, 0)
                        }
                        p5.translate((w * 0.75) + (handleD/2 + handleThickness), 0)
                        p5.rotateX(handleRotate)
                        p5.torus(handleD * 2, handleThickness, handleFacets)
                    p5.pop()
                p5.pop();
            }
            i += 1;
        }
        if (bH > 0) {
            p5.translate(0, hSection + bH/2 - h/20, 0)
            p5.cylinder((w * baseWidth * (flatness * 0.3)), bH, longFacets === 2 ? 24 : Math.min(24, longFacets + 1))
        }
        p5.pop();
	};

	return (
        <div className="vases">
            <Sketch setup={setup} draw={draw} />
            <div className="vases-camera">
                <label>
                    <span>
                        pitch
                    </span>
                    <input type="range" min={0} max={360} step={1} value={camera.x} onChange={(e) => {
                        const val = parseInt(e.target.value, 10)
                        setCamera((prev) => ({
                            ...prev,
                            x: val,
                        }))
                    }}
                    ></input>
                </label>
                <label>
                    <span>
                        yaw
                    </span>
                    <input type="range" min={0} max={360} step={1} value={camera.y} onChange={(e) => {
                        const val = parseInt(e.target.value, 10)
                        setCamera((prev) => ({
                            ...prev,
                            y: val,
                        }))
                    }}
                    ></input>
                </label>
                {/* <button type="button" onClick={() => {
                    setCamera((prev) => ({
                        x: 0, 
                        y: 0,
                    }))
                }}>
                    Reset Camera
                </button> */}
                <label>
                    <span>
                        wireframe
                    </span>
                    <input type="checkbox" checked={material.wireframe} onChange={(e) => {
                        const val = e.target.checked;
                        setMaterial(prev => ({
                            ...prev, 
                            wireframe: val,
                        }))
                    }}
                    ></input>
                </label>
                {!material.wireframe &&
                    <Fragment>
                        {/* <label>
                            <span>
                                opacity
                            </span>
                            <input type="range" min={0.7} max={1} step={0.01} value={material.opacity} onChange={(e) => {
                                const val = parseFloat(e.target.value)
                                setMaterial((prev) => ({
                                    ...prev,
                                    opacity: val,
                                }))
                            }}
                            ></input>
                        </label> */}
                        <label>
                            <span>
                                shiny
                            </span>
                            <input type="checkbox" checked={material.shiny} onChange={(e) => {
                                const val = e.target.checked;
                                setMaterial(prev => ({
                                    ...prev, 
                                    shiny: val,
                                }))
                            }}
                            ></input>
                        </label>
                        {material.shiny &&
                            <label>
                                <span>
                                    shininess
                                </span>
                                <input type="range" min={1} max={15} step={1} value={material.shininess} onChange={(e) => {
                                    const val = parseInt(e.target.value, 10)
                                    setMaterial((prev) => ({
                                        ...prev,
                                        shininess: val,
                                    }))
                                }}
                                ></input>
                            </label>
                        }
                    </Fragment>
                }
            </div>

            <Params state={state}
                update={(vals) => setState(prev => ({...prev, ...vals}))}
                randomize={() => setState(getParams())}
                />
        </div>
    )
};

export default Vases;