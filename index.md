---
layout: default
title: Clara Bates
---

## About Me
<div id="about-me"></div>

Hello! I am currently a student at Whitman College studying Computer Science. I will graduate this May and I am excited to enter the post-grad world!

## Data Sources and Project Ideas
<div id="data-sources"></div>

[Electrical Vehicle Data](https://catalog.data.gov/dataset/electric-vehicle-population-data)

Description: This dataset contains information about all battery powered and plug-in hybrid vehicles that are currently registered in Washington State. This information includes vehicle make, model, year, and electric range. There is also data about the location of each registered vehicle.

Project Ideas: We can analyze consumer trends for electrical vehicle purchasing. For example, which new car models do Washington residents prefer vs. which old car models do they prefer. We can also examine which areas of the state have the highest rates of electric vehicle ownership, and compare those rates to population demographics.

[Highly Capable Student Data](https://catalog.data.gov/dataset/2024-school-year-highly-capable-data)

The Highly Capable Program is an accelerated learning program for eligible students in Washington State. This dataset provides a comparison of the demographics of highly capable students to those of the general student population. Some of the demographic data includes race, ethnicity, income, and disability. The data is specifically for 2024, and is grouped by school, district, and state totals.

Project Ideas: This data would be great for analyzing student enrollment in the Highly Capable program across different racial demographics. We can also create a heat map that displays enrollment rates across the state. 

[Washington State Art Collection](https://catalog.data.gov/dataset/washingtons-state-art-collection-2024-07-15)

This dataset tracks all artworks that are publicly owned, publicly sited, and publicly selected in Washington State. It contains information about the art, as well as where it is displayed.

Project Ideas: With this data, we can create an interactive map of all public art in Washington. One potential feature could include suggestions for the best cities to visit to see public art, or maybe road trip routes to view the artwork. For additional analysis, we can examine the which mediums are most popular, or what year the majority of the artwork was made.

[Crime Data](https://catalog.data.gov/dataset/washington-state-uniform-crime-reporting-summary-reporting-system)


[Fish Harvest Data](https://catalog.data.gov/dataset/washington-anadromous-fish-harvest-data-1974-2012)

This dataset provides salmon harvest counts from 1974-2012. For each year, the counts are placed into one of the three following categories: treaty, commercial, or sport fishing. Counts are also divided by species.

Project Ideas: With this dataset, we can perform time-series analyses to compare how the fishing categories' contributions (treaty, commercial, sport) evolved over the decades. To supplement this, we can also examine how changes in fishing policies have affected these numbers. If we wanted to use machine learning, we can build a predictive model to forecast salmon harvests in future years based on historical data and fishing categories. 

## Where's Schueller??
<div id="wheres-schueller"></div>

For this project, we wanted to explore how often Professor Schueller supports Whitman tennis. The map below displays every time Professor Schueller attended a tennis match in 2022 and 2023.

{% include_relative assets/figures/tennisPlotly.html %}

## Above and Beyond
<div id="above-and-beyond"></div>

For the above and beyond portion of this project, I decided to include a countdown timer for graduation. 

<div id="countdown">
    <p>Countdown Until Graduation:</p>
    <div id="timer"></div>
</div>
