/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/
console.log("ready")
d3.json('data/buildings.json').then(function(data){
    console.log(data)
    data.forEach(function(d){
        d.height = +d.height
    })

    
var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400)

var rectangles = svg.selectAll("rect")
    .data(data)

rectangles.enter()
    .append("rect")
    .attr("x", function(d,i){
        // console.log("item :" + d,"index :" +i )
        console.log(i)
        return (i * 90) + 50;
        // return d;
    })
    .attr("y", 10)
    .attr("width", 50)
    .attr("height", function(d,i){
        // console.log("item :" + d,"index :" +i )
        console.log(d.height)
        // return parseInt(d.height)
        return d.height; 
    })
    .attr("fill", function(d,i){
        if (i % 2 == 0){
            return "blue";
        }
        else {
            return "red"
        }
    })
})
