import React, {  useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import _ from "lodash";
const states = require("./states.geojson");

const MAX_SCALE = 1000000;
const ZOOMED_IN_THRESHOLD = 400000;
let scale = 1;
let projection = d3.geoAlbers()
    .translate([0, 0])
    .scale(scale)
const path = d3.geoPath().projection(projection)

let texas = states.features.filter(state => state.properties.NAME === 'Texas');

export default () => {
    const svgNode = useRef(null)
    const [init, setInit] = useState(false);
    const [size, setSize] = useState({w: window.innerWidth, h: window.innerHeight})

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth !== size.w || window.innerHeight !== size.h) {
                setSize({w: window.innerWidth, h: window.innerHeight})
            }
        }
        
        if (window.innerWidth > 667) {
            window.addEventListener("resize", handleResize);
            
            return () => window.removeEventListener("resize", handleResize);
        }
      }, []); 

    useEffect(() => {
        if (svgNode.current && !init) {
            setInit(true);

            const svg = d3.select(svgNode.current)
                .append("g")
                .attr("class", "map-container")
                // .style("transform", "rotate(-16deg)")
                // .style("transform-origin", "50% 50%")

            svg.append("g")
                .attr("class", "states")

            drawMap();
        }
    }, [svgNode.current])

    const updateStates = () => {
        const svg = d3.select(svgNode.current)
        
        let paths = svg.select(".states")
            .selectAll(".state-geo")
            .data(texas)

        paths.exit().remove();

        let pathsEnter = paths.enter()
            .append("path")
            .attr("class", "state-geo")

        paths = paths.merge(pathsEnter);

        paths.each(function (d) {
            d3.select(this)
                .style("stroke", "#000")
                .style("fill", "#fff")
                // .on("click", (e, d) => setFilters("states", {nested: d.properties.nested, name: d.properties.name, nhood: d.properties.nhood}))
                // .transition(200)
                .attr("d", path)
        })
    }

    useEffect(() => {
        drawMap();
    }, [size])

    useEffect(() => {
        setInterval(() => {
            texas[0].geometry.coordinates.forEach((c, i) => {
                c.forEach((d, j) => {
                    // d.forEach((pair, k) => {
                    //     texas[0].geometry.coordinates[i][j][k][0] *= 1.001
                    //     texas[0].geometry.coordinates[i][j][k][1] *= 1.001
                    // })
                    if (texas[0].geometry.coordinates[i][j].length > 10) {
                        texas[0].geometry.coordinates[i][j] = texas[0].geometry.coordinates[i][j].filter((x, k) => k%2 === 0)
                    }
                })
            })

            updateStates();
        }, 1400)
    }, [])

    const drawMap = () => {
        projection = projection
            .scale(1)
            .translate([0,0]);

        let offset = 400;
        if (size.w < 668) {
            offset = 0;
        }
        
        const w = Math.max(size.w - 400, 500);
        const h = size.h - (size.w < 668 ? 50 : 0);
        const b = path.bounds({features: texas, type: "FeatureCollection"}),
            s = Math.min( MAX_SCALE, 1.0 / Math.max((b[1][0] - b[0][0]) / w, (b[1][1] - b[0][1]) / h)),
            t = [(w - s * (b[1][0] + b[0][0])) / 2, (h - s * (b[1][1] + b[0][1])) / 2];
        
        scale = s;

        projection = projection
            .scale(s)
            .translate(t);

        d3.select(svgNode.current)
            .attr("viewBox", [-offset, 0, w + offset, h])

        updateStates();

        // updateCoords();

        // updateLabels();
    }

    return (
        <div className="pos-relative">
            <svg style={{display: "block"}} ref={svgNode}></svg>
        </div>
    )
}