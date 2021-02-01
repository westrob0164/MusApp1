

// this function creates the circle of fifths.     
import { createSolfegeMusicLine  } from './createSolfegeMusicLine.js';

export function circleOfFifths() {

    //setup the SVG canvas
    var svg = d3.select("svg"),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2;

    //centre the circle of fifths (two pie charts, outer ring is major keys, inner ring is minor keys)
    var svg1 = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + ((height / 2)) + ")");

    var svg2 = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + ((height / 2)) + ")");

    //define the circle of fifths
    var pie = d3.pie()
        .sort(null)
        .value(function (d) { return d.count; })
        .startAngle(-.261799)
        .endAngle(6.02139);

    var arc1 = d3.arc()
        .outerRadius(radius-2)
        .innerRadius(155);

    var arc2 = d3.arc()
        .outerRadius(155)
        .innerRadius(95);

    var label = d3.arc()
        .outerRadius(radius - 30)
        .innerRadius(radius - 30)      
        

    var label2 = d3.arc()
        .outerRadius(130)
        .innerRadius(130);

    var yourImagePath = "images/a.jpg";

    var Tooltip = d3.select("#solfegeImage")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "1px")
        .style("border-radius", "15px")
        .style("padding", "5px");


    var mouseover = function (d) {
        Tooltip
            .style("opacity", 1);
        d3.select(this)
            .style("opacity", .5);
    }


    var mouseleave = function (d) {
        Tooltip
            .style("opacity", 0);
        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
    }

    var mousemove = function (d) {
        var string = `url("images/${d.data.ttImage}.png")`;
        Tooltip
            .style("background-image", string)
            .style("left", (d3.event.pageX + 10) + "px")
            .style("top", (d3.event.pageY - 160) + "px");
    }


    // major key ring
    d3.csv("data/major.csv", function (error, data) {
        if (error) {
            throw error;
        }

        var arc = svg1.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .on('click', function (d, i) { solfegeCreate(d) });

        arc.append("path")
            .attr("d", arc1)
            .attr("fill", function (d) { return d.data.colour; });

        arc.append("text")
            .attr("transform", d => `translate(${label.centroid(d)})`)
            .attr("dy", "0.3em")
            .style("text-anchor", "middle")
            .text(function (d) { return d.data.label; });
    });

    // minor key ring
    d3.csv("data/minor.csv", function (error, data) {
        if (error) {
            throw error;
        }

        var arcq = svg2.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .on('click', function (d, i) { solfegeCreate(d) });

        arcq.append("path")
            .attr("d", arc2)
            .attr("fill", function (d) { return d.data.colour; });

        arcq.append("text")
            .attr("transform", d => `translate(${label2.centroid(d)})`)
            .attr("dy", "0.3em")
            .style("text-anchor", "middle")
            .text(function (d) { return d.data.label; });

    });

    var legend = svg      
        .append('g')  
        .attr('class', 'legend') 
        .attr("id", "legendText")
        .attr("text-anchor", "middle")
        .attr("transform", "translate(" + ((width / 2)) + "," + ((height / 2)+30) + ")");   
    
    //call the function to create the selected key label, and if applicable the music line
    function solfegeCreate(d) {

        $("#legendText").empty();

        legend.append('text')  
            .text(d.data.label);

        notes.selectedSolfegeKey = [d.data.value, d.data.label];

        if ( notes.solfegeSelected != 0) {

            var keyToUse = notes.solfegeSelected[0]

            createSolfegeMusicLine(d.data.value, d.data.label, keyToUse);
        }       
    }
}
