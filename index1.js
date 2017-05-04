var inputValue = 2004;
    var years = [];
    for(var i = 2004; i <= 2016; i=i+1) {
            years.push(i);
    }
    

    //Play/Stop/Slide controls are made invisible
    document.getElementById("playbutton").style.visibility = "hidden";
    document.getElementById("stopbutton").style.visibility = "hidden";
    document.getElementById("timeslide").style.visibility = "hidden";
    document.getElementById("range").style.visibility = "hidden";
    

    d3.json("statesmap.json", function(error, geo_data){
        // Loading the geojson file
        if (error) throw error;
        var format = d3.time.format("%Y");
        var margin = 75,
            width = 1400 - margin,
            height = 600 - margin;
        d3.csv("2004-2016.csv", function(error1, data_2008) {
          /* Loading the datafile*/
          if (error1) throw error1;
          

          data_2008.forEach(function(d){

            var projection = d3.geo.albersUsa()
                                   .scale(1200)
                                   .translate( [width / 2, height / 2]);
            var coords = projection([+d.Longitude, +d.Latitude]);
            d['x'] = coords[0];
            d['y'] = coords[1];
            d['Year'] = format.parse(d['Year'])
            d['State'] = d['State'];
            d['Flight_count'] = +d['Flight_count'];
            return d;
          });
          
         "use strict";

          d3.select("body")
            .append("h2");
            
          d3.select("body")
            .append("h4");

          d3.select( "body" )
                        .append( 'div' )
                        .attr( 'id', 'intro' )
                        .append( "p" )
                        .attr( 'id', 'pintro' )
            .text("Flight data visualization uses the data of domestic flights operated from all US states for the years 2004 through 2016. Each state is represented by its capital in the US map.The data reveals that the states Texas, California, Florida, Georgia and Illinois are states having high flight operations over the years and the number of flights operated gradually decreases after the year 2007 except the years 2012 and 2013 ")
            
          // creating the USmap
          var svg = d3.select("body")
                      .append("svg")
                      .attr("width", width + margin)
                      .attr("height", height + margin)
                      .append('g')
                      .attr('class', 'map');

          
       
          var projection = d3.geo.albersUsa()
                               .scale(1200)
                              .translate( [width / 2, height / 2]);

          var path = d3.geo.path().projection(projection);

          var map = svg.selectAll('path')
                     .data(geo_data.features)
                     .enter()
                     .append('path')
                     .attr('d', path)
                     .style('fill', 'lightBlue')
                     .style('stroke', 'black')
                     .style('stroke-width', 0.5);

          //nesting the data
          var nested = d3.nest()
                       .key(function(d) {
                          return d['Year'].getUTCFullYear();
                        })
                       .entries(data_2008);
        
          var flight_arr = new Array();
          for (var k in nested) {
            /*  Gathering all the flight_counts to  find the max and using it for scale
            */

            for (var kk in nested[k].values) {
                flight_arr.push(+nested[k].values[kk].Flight_count);
            }
          }
          
          var flight_max = d3.max(flight_arr);
          var radius = d3.scale.sqrt()
                       .domain([0, flight_max])
                       .range([0, 35]);

          function key_func(d) {
                return d['key'];
          }

          //creating a Tool tip for analysis
          var tip = d3.tip()
                        .attr('class', 'd3-tip')
                        .offset([-10, 0])
                        .html(function(d) {
                          
                          return ("<span style='color:red'>" + d.values.State + "<br>" 
                            + d3.format(',')(d.values.Flight) + "</span>");
                        })
            svg.call(tip);
            
          function update(year) {
            /* when the year is passed, the nested data gets filtered for this 
            year and the filtered data is visualized on the map*/
            var filtered = nested.filter(function(d) {
                  return new Date(d['key']).getUTCFullYear() === year;
            });

            d3.select("h2")
              .text("Flight Data visualization " + year);

            var flight_total = 0;
            

            var len=filtered[0].values.length;

            var abc = new Array();
          
            for (var k in filtered[0].values) {

              /* processing the data for easy retrieval */
                flight_total = flight_total +( +filtered[0].values[k].Flight_count);

                abc.push({key:filtered[0].values[k].State,
                  values:{r:radius(filtered[0].values[k].Flight_count),
                  x:filtered[0].values[k].x,
                  y:filtered[0].values[k].y,
                  Flight:filtered[0].values[k].Flight_count,
                  State:filtered[0].values[k].State}
                });
            }
            
           
            
        
          //  Adding and removing the circles on the map for the updated data 
            var circles = svg.selectAll('circle')
                             .data(abc.sort(function(a, b) { 
                               return b.Flight_count - a.Flight_count;
                               }), key_func);
            circles.exit().remove();
          
            circles.enter().append("circle");
            

            circles.attr('cx', function(d) { return d.values.x; })
                   .attr('cy', function(d) { return d.values.y; })
                   .attr('r', function(d) { return d.values.r; })
                   .style("fill" , function(d) {        
                      if (d.values.Flight <= 50000) {return "red"}  
                    
                      else if (d.values.Flight >= 120000) {return "green"} 
                      else { return "orange" }             
                    ;})
                   .on('mouseover', tip.show)
                   .on('mouseout', function(d) {
                            tip.hide(d)
                    });
                   

            document.getElementById("textbox_value").value = d3.format(',')(flight_total);
            
            

            /* Creating a legend for the map
            The map will be filled with three different coloured datapoints 
            representing three categories*/
            var legend = svg.append("g")
                            .attr("class", "legend")
                            .attr("transform", "translate(" +(width - 100 )+ "," + 60 + ")")
                            .selectAll("g")
                            .data([  "0-50000", "50001-120000","Over 120000"])
                            .enter().append("g");

            legend.append("circle")
                  .attr('cx', function(d){
                     return 0;
                   })
                  .attr('cy', function(d, i) {
                    return i * 45;
                  })
                  .attr('r', function(d) {
                    if (d == "0-50000") {
                      return  8;
                    } else if (d == "50001-120000") {
                      return 12;
                    } else {return 17;}
                  })
                 .attr('fill', function(d) {
                    if (d == "0-50000") {
                      return 'red';
                     
                     } else if (d == "50001-120000") {
                      return 'orange';
                     } else {return 'green';}
                  });

            legend.append("text")
                  .attr("y", function(d, i) {
                    return i * 45 + 1;
                   })
                  .attr("x", 5 * 7)
                  .text(function(d) {
                    return d;
                   });

            // Adding the transition 
            svg.selectAll('path')
                .transition()
                .duration(500)
                
          }
         

          var year_idx = 0;
          togglePressed(0);
      
          
          d3.select("#playbutton")
            .on("click", function(d,i) {
              // Playbutton event listener 
              // Animation starts from the start or from the year selected by the user. 

              
              index = years.indexOf(inputValue);
              togglePressed(index);
          });   
        
          

          function togglePressed(index){
            /* creating the animation. The animation is created for the years 2004 through 2016.
              */
            var year_interval1 = setInterval(function() {

              update(years[index]);

              //Tuning the slider with the current year value
              d3.select("#timeslide").property("value", years[index]);
              
              index++;
              if(index >= years.length) {
                clearInterval(year_interval1);
                
                // Play/Stop/Slide controls are made visible
                document.getElementById("playbutton").style.visibility = "visible";
                document.getElementById("stopbutton").style.visibility = "visible";
                document.getElementById("timeslide").style.visibility = "visible";
                document.getElementById("range2").style.visibility = "visible";
            
                document.getElementById("textbox_value").style.visibility = "visible";
                document.getElementById("range").style.visibility = "visible";
                
                d3.select("#timeslide").on("input", function() {
                 

                  inputValue = +this.value;
                  update(+this.value);
                });
                

                 
              }
              
              d3.select("#stopbutton")
                .on("click", function(d,i) {

                    /* Stopbutton event listener. The animation stops, whenever this button is clicked  */
                      inputValue = years[index];
                      
                      // clears the animation to stop it
                     clearInterval(year_interval1);
                     
              }); 
              
            }, 1000);
            
          }
          
       

      
              
        });
      });