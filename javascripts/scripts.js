Array.prototype.sample = function(){
  return this[Math.floor(Math.random() * this.length)]
}


function projectData(data){

  // Select Entire SVG
  var svg = d3.select('svg');

  // Need new circles? If so... build them!
  var circles = svg.selectAll('circle')
                      .data(data)
                      .enter()
                      .append('circle');

  // Update visualization with new data!
  var circles = svg.selectAll('circle')
                      .data(data)
                      .transition()
                      .duration(300)
                        .attr('r', function(d){return d +'px'})
                        .attr('cx', function(){return (Math.random() * 100) + '%'})
                        .attr('cy', function(){return (Math.random() * 100) + '%'})
                        .attr('opacity', '0.5')
                        .style('fill', function(){return crayola.sample().hex});


  // // Any empty tents?  Remove them!
  // tents.exit().remove();

}

window.onload = function(){
  d3.select('svg')
    .attr('width', '100%')
    .attr('height', '75%')
    .style('border', '1px solid black');

  setInterval(function(){
    projectData([5, 10, 15, 50, 100])
  }, 500)
}

