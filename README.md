# Project3_Group8

## Members
Isaac Gish<br>
Manasi Shidhaye<br>
Shannon Lloyd<br>
Vaneesa Ortiz



## The Fancy Hat Company
This is the story about The Fancy Hat Company's search for a new location. We wanted a location with clientele that had a high enough income that they would have the disposable income to spend on fancy hats. We chose the state of Texas because according to the Bureau of Economic Analysis, Texas had the 12th highest expenditures for clothing and footwear in 2021 at $1,433. We also want to make sure that there is a large enough population to support our store.

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Conclusion](#conclusion)
- [Contributing](#contributing)

## Getting Started
We used Python in Jupyter Lab, Splinter, Beautiful Soup, Mongo DB, Leaflet, ChartJS, NodeJS, Flask, and Git to create this data visualization.
We encountered some difficulties while trying to install ChartJS. We finally had to install NodeJS in order to install ChartJS

The app.py is the main program to display our website, it is in the root directory.  For Flask to work properly, our html template is within the templates folder and our JavaScript and CSS files are under the static folder.

## Usage:

Run the first part of the Income_Population_Project_3.ipynb in order to gather the data using Splinter and Beautifull Soup. This will write te data to Json files. Before you run the Pymongo portion of the code you will need to create and populate the database. This is done by running the following 2 lines of code separately in your Git Bash window. Then contiune to run the rest of the code contained in the file.

- **mongoimport --type json -d Project_3_DB -c Income --drop --jsonArray ./json_files/income_data.json**

- **mongoimport --type json -d Project_3_DB -c Population --drop --jsonArray ./json_files/population_data.json**


To run the Flask API to render our results page open a Git Bash window in the same area as the app.py file. In the Git Bash window run the app.py by entering the following code into your Git Bash window.

- **python app.py**

The results will have a http address in it, copy this address and paste it into your browser. The page will auto-populate from the index.html template in the templates folder and the JavaScript and stylesheet files in the static folder.

## Conclusion

Surprisingly, per capita income was not as strong of an indicator for a good store location as we expected. The counties that had a very high per capita income had very low populations. We also found that counties with high populations had a lower per capita income than we desired. We preferred the locations that were a little more balanced in both areas. Our picks were Denton, Midland, and Montgomery.

We acknowledge that given the time constraints we had to limit the scope of possible considerations. Given an opportunity, we feel a more informed decision could be formed if other things were also researched and considered. Examples of other things to consider are the concentration of similar shops (is the market already saturated), is the product relevant for the market (how many people wear hats). We know that there are many things like this that have not been mentioned.

Overall, we feel this gave us a good starting point for understanding the Texas economy.

## Citations and Acknowledgements:

County geojson file from: https://data.cityofdenton.com/dataset/texas-counties-polygon<br>
Data gathered from:  https://www.bea.gov/<br>
NodeJS:  https://nodejs.org/en<br>
ChatJS: https://www.chartjs.org/



