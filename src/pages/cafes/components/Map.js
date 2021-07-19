import React, {  useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import _ from "lodash";
const neighborhoods = require("./../data/neighborhoods.geojson");
import { cafeCoords, filteredCoords, getRepresentedNeighborhoods } from "./../util";

const MAX_SCALE = 1000000;
const ZOOMED_IN_THRESHOLD = 400000;
let scale = 1;
let projection = d3.geoAlbers()
    .translate([0, 0])
    .scale(scale)
const path = d3.geoPath().projection(projection)

export default ({filters, setFilters, selected, setSelected}) => {
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
                .style("transform", "rotate(-16deg)")
                .style("transform-origin", "50% 50%")

            svg.append("g")
                .attr("class", "neighborhoods")

            svg.append("g")
                .attr("class", "cafe-coords")

            svg.append("g")
                .attr("class", "cafe-labels")

            drawMap();

            // svg.append("g")
            //     .selectAll(".cafe-label")
            //     // .data(cafeCoords.sort((a, b) => b.geometry.coordinates[1] - a.geometry.coordinates[1]))
            //     .data(cafeCoords)
            //     .enter()
            //     .append("g")
            //     .attr("class", "cafe-label")
            //     .style("pointer-events", "none")
            //     .each(function (d, i) {
            //         const translate = projection(d.geometry.coordinates);
            //         const g = d3.select(this)
            //             .append("g")
            //             .attr("class", "label-g")
            //             .style("transform", "rotate(16deg)")
                    
            //         const rect = g.append("rect")
            //             .style("fill", "var(--coord-selected)")

            //         const text = g.append("text")
            //             .text(d => d.cafe.Name)
            //             .style("font-size", "0.25rem")
            //             .style("text-anchor", "middle")
            //             .style("fill", "#fff")
                    
            //         const bbox = text.node().getBBox();

            //         rect.attr("width", bbox.width + 2)
            //             .attr("height", bbox.height + 1)
            //             .style("transform", `translate(-${bbox.width/2 + 1}px, -${bbox.height/2 + 1.75}px)`)

            //         d3.select(this).style("opacity", 1)
            //             .style("transform", `translate(${translate[0] + 2}px, ${translate[1] - 8}px)`)
                    
            //     //     const thisNode = g.node();

            //     //     d3.selectAll(".cafe-label")
            //     //         .filter((x, index) => index < i)
            //     //         .each(function(x) {
            //     //             const thisBBox = thisNode.getBBox();

            //     //             const prevDrawn = d3.select(this).select(".label-g").node().getBBox();

            //     //             const coord = {
            //     //                 x1: prevDrawn.x, 
            //     //                 y1: prevDrawn.y, 
            //     //                 x2: prevDrawn.x + prevDrawn.width, 
            //     //                 y2: prevDrawn.y + prevDrawn.height,
            //     //                 x3: thisBBox.x, 
            //     //                 y3: thisBBox.y, 
            //     //                 x4: thisBBox.x + thisBBox.width, 
            //     //                 y4: thisBBox.y + thisBBox.height
            //     //             };

            //     //             const collide = coord.x1 < coord.x4 && coord.x3 < coord.x2
            //     //                 && coord.y1 < coord.y4 && coord.y3 < coord.y2

            //     //             if (collide) {
            //     //                 console.log(x.cafe.Name, d.cafe.Name)
            //     //                 g.style("transform", `rotate(16deg) translate(${0}px, ${Math.abs(coord.y2 - coord.y3)}px)`)
            //     //             }
            //     //         })
            //     })
                
        }
    }, [svgNode.current])

    const getRadius = (isSelected) => {
        let r = isSelected ? 8 : 5;

        if (scale >= ZOOMED_IN_THRESHOLD || size.w < 667) {
            r *= 1.4;
        }
        
        return r;
    }

    const getCafeCoordPosition = (d) => {
        const translate = projection(d.geometry.coordinates);

        return `translate(${translate[0]}px, ${translate[1]}px)`;
    }

    function updateCafeCoord (d, selection) {
        selection
            .style("transform", getCafeCoordPosition(d))

        selection.select("circle")
            .transition()
            .duration(500)
            .attr("r", d => getRadius(selected.indexOf(d.cafe.Name) > -1))
            .style("fill", d => selected.indexOf(d.cafe.Name) > -1 ? "var(--coord-selected)" : "var(--coord)")
            .style("stroke", "rgba(255,255,255,0)")
            .style("stroke-width", "10px")
            
        selection.on("click", (e, d) => {
            setSelected(d.cafe.Name);
        })
    }

    function updateLabel(d, selection) {
        const translate = projection(d.geometry.coordinates);

        const text = selection
            .select("text")
            .text(d => d.cafe.Name)

        const bbox = text.node().getBBox();

        selection
            .select("rect")
            .attr("width", bbox.width + 20)
            .attr("height", bbox.height + 10)
            .attr("rx", 13)
            .style("transform", `translate(-${bbox.width/2 + 10}px, -${bbox.height/2 + 9}px)`)
        
        selection.select("circle")
            .transition()
            .duration(500)
            .attr("r", d => getRadius(true))
            .style("fill", "var(--coord-selected)")

        selection
            .select("line")
            .attr("x1", 0)
            .attr("x2", 0)
            .attr("y1", 0)
            .attr("y2", `${bbox.height + 30}px`)

        selection
            .style("transform", `translate(${translate[0]}px, ${translate[1]}px)`)
            .select(".label-g")
            .style("transform", `rotate(16deg) translate(0, -${bbox.height + 34}px)`)
    }

    const updateLabels = () => {
        let labels = d3.select(".cafe-labels")
            .selectAll(".cafe-label")
            .data(_.compact(selected.map(name => cafeCoords.find(coords => coords.cafe.Name === name))))

        labels.exit().remove();

        const enter = labels.enter()
            .append("g")
            .attr("class", "cafe-label")
            .style("pointer-events", "none")

        const g = enter.append("g")
            .attr("class", "label-g")

        enter.append("circle")
            .attr("r", getRadius(false))
            .style("fill", "var(--coord)")
            
        g.append("line")
            .style("stroke", "var(--coord-selected)")
            .style("stroke-width", 2)
        
        g.append("rect")
            .style("fill", "var(--coord-selected)")

        g.append("text")

        labels = labels.merge(enter)
            
        labels.each(function(d, i) { 
            updateLabel(d, d3.select(this))
        })
    }

    const updateCoords = () => {
        const svg = d3.select(svgNode.current)
        
        const cafeData = filteredCoords(filters);

        let coords = svg.select(".cafe-coords")
            .selectAll(".cafe-coord")
            .data(cafeData)

        coords.exit().remove()
        
        let enter = coords.enter()
            .append("g")
            .attr("class", "cafe-coord")
            .each(function(d) {
                d3.select(this)
                    .append("circle")
                    .style("fill", "var(--coord)")
                    .attr("r", getRadius(false))
            })

        coords = coords.merge(enter)
        
        coords.each(function(d) {
            updateCafeCoord(d, d3.select(this))
        })
    }

    const updateNeighborhoodLabel = (d, selection, isRepresented) => {
        const translate = projection(d3.geoCentroid(d));

        selection.style("font-size", scale < ZOOMED_IN_THRESHOLD ? "0.5rem" : "0.75rem")
            .style("fill", isRepresented ? "#000" : "#b1b1b1")
            .selectAll("tspan")
            .data(d.properties.name.split(" "))
            .enter() 
            .append("tspan")
            .text(word => word)
            .attr("x", 0)
            .attr("dy", scale < ZOOMED_IN_THRESHOLD ? 8 : 16)
        
        selection.style("transform", `translate(${translate[0]}px,${translate[1] - (d.properties.name.split(" ").length * 4)}px) rotate(16deg)`)
    }

    const updateNeighborhoods = () => {
        const represented = getRepresentedNeighborhoods(filters)
        const svg = d3.select(svgNode.current)
        
        let paths = svg.select(".neighborhoods")
            .selectAll(".n-hood")
            .data(neighborhoods.features.sort(area => represented[area.id] ? 1 : -1))

        paths.exit().remove();

        let pathsEnter = paths.enter()
            .append("path")
            .attr("class", "n-hood")

        paths = paths.merge(pathsEnter);

        paths.each(function (d) {
            d3.select(this)
                .style("stroke", d => represented[d.id] ? "var(--neighborhood-outline)" : "#d0afff")
                .style("fill", d => represented[d.id] ? "var(--neighborhood)" : "#f5f5f5")
                .on("click", (e, d) => setFilters("neighborhoods", {nested: d.properties.nested, name: d.properties.name, nhood: d.properties.nhood}))
                .attr("d", path)
        })

        svg.select(".neighborhoods")
            .selectAll(".n-hood-label")
            .remove();
            
        svg.select(".neighborhoods")
            .selectAll(".n-hood-label")
            .data(neighborhoods.features.filter(area => scale >= ZOOMED_IN_THRESHOLD ? true : represented[area.id])).enter()
            .append("text")
            .attr("class", "n-hood-label")
            .each(function (d) {
                updateNeighborhoodLabel(d, d3.select(this), represented[d.id])
            })
    }

    useEffect(() => {
        if (svgNode.current) {
            updateCoords();
            updateLabels();
        }
    }, [selected])

    useEffect(() => {
        drawMap();
    }, [filters, size])

    const drawMap = () => {
        const represented = getRepresentedNeighborhoods(filters)

        projection = projection
            .scale(1)
            .translate([0,0]);

        let offset = 400;
        if (size.w < 668) {
            offset = 0;
        }
        
        const w = Math.max(size.w - 400, 500);
        const h = size.h - (size.w < 668 ? 50 : 0);
        const b = path.bounds({features: Object.keys(represented).map(id => represented[id]), type: "FeatureCollection"}),
            s = Math.min( MAX_SCALE, 0.88 / Math.max((b[1][0] - b[0][0]) / w, (b[1][1] - b[0][1]) / h)),
            t = [(w - s * (b[1][0] + b[0][0])) / 2, (h - s * (b[1][1] + b[0][1])) / 2];
        
        scale = s;

        projection = projection
            .scale(s)
            .translate(t);

        d3.select(svgNode.current)
            .attr("viewBox", [-offset, 0, w + offset, h])

        updateNeighborhoods();

        updateCoords();

        updateLabels();
    }

    return (
        <div className="cafes-map pos-relative">
            <svg style={{display: "block"}} ref={svgNode}></svg>
        </div>
    )
}