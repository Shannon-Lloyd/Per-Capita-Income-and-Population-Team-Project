# Project3_Group8

![alt=Custom hat maker in an upscale shop](https://github.com/ortizvane09/Project3_Group8/blob/main/images/hatmaking.jpg)
*Hat maker shaping a custom hat*

## Luxury Apparel location in Texas Analysis

We are a luxury apparel company looking to open a location in Texas. We want to decide where would be a good location to maximize the chances for success. We will look at the ecomonic information available for all counties in Texas to see if there is a best match.
According to the U.S. Bureau of Economic Analysis Texas had the 12th highest per capita expenditures for clothing and footwear in 2021 with a value of $1,433 per capita.<br> 
source: https://apps.bea.gov/itable/index.html?appid=70&stepnum=40&Major_Area=3&State=0&Area=XX&TableId=525&Statistic=10&Year=2021&YearBegin=-1&Year_End=-1&Unit_Of_Measure=Levels&Rank=1&Drill=1&nRange=5


The following process will give us a better visability into locations that would be a good fit:

- Access the U.S. Bureau of Economic Analysis to web scrape information about the per capita income for all the counties in Texas.
https://apps.bea.gov/itable/?ReqID=99&step=1#eyJhcHBpZCI6OTksInN0ZXBzIjpbMSwyOSwyNSwyNiwyNyw0MF0sImRhdGEiOltbIlRhYmxlSWQiLCIyMCJdLFsiTWFqb3JBcmVhS2V5IiwiNCJdLFsiTGluZSIsIjMiXSxbIlN0YXRlIiwiNDgwMDAiXSxbIlVuaXRfb2ZfTWVhc3VyZSIsIkxldmVscyJdLFsiTWFwQ29sb3IiLCJCRUFTdGFuZGFyZCJdLFsiblJhbmdlIiwiNSJdLFsiWWVhciIsIjIwMjEiXSxbIlllYXJCZWdpbiIsIi0xIl0sWyJZZWFyRW5kIiwiLTEiXV19



 -  Web scrape here for the county population data.
https://apps.bea.gov/itable/?ReqID=99&step=1#eyJhcHBpZCI6OTksInN0ZXBzIjpbMSwyOSwyNSwyNiwyNyw0MF0sImRhdGEiOltbIlRhYmxlSWQiLCIyMCJdLFsiTWFqb3JBcmVhS2V5IiwiNCJdLFsiTGluZSIsIjIiXSxbIlN0YXRlIiwiNDgwMDAiXSxbIlVuaXRfb2ZfTWVhc3VyZSIsIkxldmVscyJdLFsiTWFwQ29sb3IiLCJCRUFTdGFuZGFyZCJdLFsiblJhbmdlIiwiNSJdLFsiWWVhciIsIjIwMjEiXSxbIlllYXJCZWdpbiIsIi0xIl0sWyJZZWFyRW5kIiwiLTEiXV19

 - Create a Mongo DB to store this information and use PyMongo to clean the data.

 - Use this data to create useful interatcive visualizations to easily identify the counties that meet our desired criteria.

 - Chart.js as an additional JavaSript library to create a chart.

 - Provide a Python Flask powered API so the data can be accessable to anyone interested in this data.

We hope to find which counties have the highest income per capita and a large enough population to support our store. 