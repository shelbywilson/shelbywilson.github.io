import React, {  useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import _ from "lodash";
const neighborhoods = require("./../data/neighborhoods.geojson");
import { cafeCoords, filteredCoords, getRepresentedNeighborhoods } from "./../util";

let projection = d3.geoAlbers()
    .translate([0, 0])
    .scale(1)
const path = d3.geoPath().projection(projection)

export default ({filters, selected, setSelected}) => {
    const svgNode = useRef(null)
    const [init, setInit] = useState(false);

    // useEffect(() => {
    //     function handleResize() {
    //       drawMap();
    //     }
        
    //     window.addEventListener("resize", handleResize);
        
    //     return () => window.removeEventListener("resize", handleResize);
    //   }, []); 

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
            //             .style("fill", "#039be5")

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


    function updateCafeCoord (d, selection) {
        const translate = projection(d.geometry.coordinates);

        selection
            .style("transform", `translate(${translate[0]}px, ${translate[1]}px)`)

        selection.select("circle")
            .transition()
            .duration(500)
            .attr("r", d => selected.indexOf(d.cafe.Name) > -1 ? 6 : 4)
            .style("fill", d => selected.indexOf(d.cafe.Name) > -1 ? "#039be5" : "#02547e")
            
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
            .attr("width", bbox.width + 12)
            .attr("height", bbox.height + 2)
            .style("transform", `translate(-${bbox.width/2 + 6}px, -${bbox.height/2 + 5}px)`)
        
        selection.select("circle")
            .attr("cy", `25px`)
            .transition()
            .duration(500)
            .attr("r", 6)
            .style("fill", "#039be5")

        selection
            .select("line")
            .attr("x1", 0)
            .attr("x2", 0)
            .attr("y1", 0)
            .attr("y2", `${bbox.height + 9}px`)

        selection
            .style("transform", `translate(${translate[0] + 7.5}px, ${translate[1] - 25}px)`)
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
            .style("transform", "rotate(16deg)")
            
        g.append("line")
            .style("stroke", "#039be5")
            .style("stroke-width", 2)
        
        g.append("rect")
            .style("fill", "#039be5")

        g.append("circle")
            .style("fill", "#039be5")
            .attr("r", 4)
            .style("fill", "#02547e")

        g.append("text")
            .style("font-size", "0.75rem")
            .style("text-anchor", "middle")
            .style("fill", "#fff")

        enter.each(function(d, i) {
            updateLabel(d, d3.select(this))
        })

        labels = labels.merge(labels)
            
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
        
        coords.enter()
            .append("g")
            .attr("class", "cafe-coord")
            .each(function(d) {
                d3.select(this).append("circle")
                    .style("fill", "#02547e")
                    .attr("r", 4)
                    
                updateCafeCoord(d, d3.select(this))
            })

        coords = coords.merge(coords)
        
        coords.each(function(d) {
            updateCafeCoord(d, d3.select(this))
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
    }, [filters])

    const drawMap = () => {
        const represented = getRepresentedNeighborhoods(filters)

        projection
            .scale(1)
            .translate([0,0]);

        let offset = 348;
        if (window.innerWidth < 668) {
            offset = 0;
        }
        
        const w = Math.max(window.innerWidth - 348, 500);
        const h = window.innerHeight - (window.innerWidth < 668 ? 50 : 0);
        const b = path.bounds({features: Object.keys(represented).map(id => represented[id]), type: "FeatureCollection"}),
            s = Math.min( 1000000, 0.9 / Math.max((b[1][0] - b[0][0]) / w, (b[1][1] - b[0][1]) / h)),
            t = [(w - s * (b[1][0] + b[0][0])) / 2, (h - s * (b[1][1] + b[0][1])) / 2];

        projection
            .scale(s)
            .translate(t);

        const svg = d3.select(svgNode.current)
            .attr("viewBox", [-offset, 0, w + offset, h])
            .select(".map-container")

        svg.select(".neighborhoods")
            .selectAll(".n-hood")
            .data(neighborhoods.features.sort(area => represented[area.id] ? 1 : -1))
            .join(enter => enter
                    .append("path")
                    .attr("class", "n-hood")
                    .style("stroke", d => represented[d.id] ? "#a0b293" : "#c4c4c4")
                    .style("stroke-width", d => represented[d.id] ? 1 : 0.5)
                    .style("fill", d => represented[d.id] ? "#e6f6da" : "#f5f5f5")
                    .on("mouseenter", (e, d) => console.log(d))
                    .attr("d", path)
                ,
                update => update
                    .style("stroke", d => represented[d.id] ? "#a0b293" : "#c4c4c4")
                    .style("stroke-width", d => represented[d.id] ? 1 : 0.5)
                    .style("fill", d => represented[d.id] ? "#e6f6da" : "#f5f5f5")
                    .on("mouseenter", (e, d) => console.log(d))
                    .attr("d", path)
                ,
                exit => exit.remove()
            )

        updateCoords();

        updateLabels();
    }

    return (
        <div className="cafes-map pos-relative">
            <svg style={{display: "block"}} ref={svgNode}></svg>
        </div>
    )
}