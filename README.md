# Interactive_Visualization_using_D3
Flight data visualization uses the data of domestic flights operated from all US states for the years 2004 through 2016. Each state is represented by its capital in the US map. The number of flights operated from each state is animated for the years 2004 through 2016. Different colours and sizes are used on the map to represent the flight counts.
 
Analysis of the Flight data reveals that 
- The number of flights operated per year gradually decreases after the year 2007 except the years 2012 and 2013. 
- Texas, California, Florida, Georgia and Illinois are the top 5 states having high flight operations for all the years.

A bar chart named Bar_Chart_Flight_Data.png is included to show the trend.  

Design

The Flight data visualization involves the geographical location of all US states. It is a good idea to use the map to locate geographical data. For each year,the visualization shows the data of all 50 states at once and makes it easy to compare.

The geographical location helps in placing the circles at a specific positions and is more accurate. The capital of the state is used for representing the state. Various sizes of the circles represents the variation in flight operations per state. Different colours on the map helps the viewer to recognize the groups. The viewer easily groups the datapoints of similar colour into one group.

Legend helps the viewer to get the details about the group. The viewer can grasp more information with the position, size, colour and legend.

The tooltip helps the viewer to know the name of the state and its total flights operated for that year on mouse hover. It allows the user to get the details like top 5  and bottom 5 flight operating states easily.

A new textbox is added to show the total flight operations in that year. It includes all the states.It gives an oppurtunity to the viewer to get the numbers and can compare with another year.

A slider is added for the viewer interaction. It allows the viewer to select any year and see the changes on the map quickly.

Two buttons are added to improve the interaction. The play button renders an animation from the viewer selected year or from the year 2004 if the slider is not slected. The stop button allows the user to stop the animation whenever they like.

Slider,Play and Stop button allows the viewer to interact with the data. They need to be kept as close as possible and allowing the viewer to maneuver easily, among these three controls. Placing the buttons just beneath the slider helps in less maneuver.

With all these design criterias taken into consideration, an user friendly interaction can be created.

Feedback

The index_one.html has an animation with single coloured representations on the map. The variation in flight counts are presented by its size.

Viewer's response:

Siva:   I could see that the size of the circles changes every year but I couldn’t get much information from this. 

Monica: Animation seems to be fast ,thus preventing me from grasping the information.

Anu:    Various sizes of the circles represents the variation but couldn’t get how big is the variation.


The index_two.html has an animation with three different colours and a legend is included to interpret the colours.

Viewer's response:

Siva:   The different colours on the map, along with the legend is helping me to get some information.I can differentiate the states having high/low flight counts over the years. 

Monica: Eventhough the speed of the animation remains the same, I can see the changes from one category to another category clearly. Also the circle representations for the legend was too big especially the green one.

Anu:    The map of 2004 has more green coloured circles. During the animation, I could see that many circles changed its colour and the map of 2016 has more orange and red circles than 2004.

The index.html illustrates the interactive version of the map. This includes a slider to select a year, a Playbutton is used to play the animation and Stopbutton is used to stop the animation.

Viewer's response:

Siva:   The slider helps me to see the data for an year.Also it helps me to start the animation from the year of my choice and stop it in between.

Monica: I can take my own time to get the information. The changes in the map for consecutive years can be compared easily.

Anu:    The interactive things on the visualisation helps me to see the change and also to find out  variations over the years. Now, I can focus on all the circles for a year.

The Index_final.html includes a textbox which shows the total US domestic flight operations for a specific year. A tooltip is included to show the name of the state and the flight operation count for that state for a specific year on mousehover.
Introductory paragraph has been added to give the information about the dataset.

Viewer's response:

Siva:  Total flights per year allows me to compare with other years and to find some trends. Tooltip helps me to find which states are doing good or bad. 

Monica: The description allows me to understand the data better and made me curious to check whether the your findings are true or not. Tooltip and textbox makes it easy for verification.

Anu:   Tooltip is helping me to map the size of the circle with its numbers. Total flights per year value allows me to investigate on the described findings.

The Index1_final.html includes a title for the legend , added thousand separators and text to the title. The textbox and its title are repoistioned. 

Viewer's response:

Siva:  The separators helps in reading the numbers quickly. The interactive elements are poistioned well and looks nice.


Resources:
http://www.d3noob.org/2014/04/using-html-inputs-with-d3js.html
http://thematicmapping.org/playground/d3/d3.slider/
http://benheb.github.io/d3.slider/
http://bl.ocks.org/phoebebright/raw/3176159/
http://learnjsdata.com/group_data.html
http://stackoverflow.com/questions/36292027/d3-access-nested-data


