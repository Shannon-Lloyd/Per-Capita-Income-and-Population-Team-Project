// Creating the map objects
let incomeMap = L.map("income", {
  center: [31.9686, -99.9018],
  zoom: 6
});

let populationMap = L.map("population", {
  center: [31.9686, -99.9018],
  zoom: 6
});

// Adding the tile layers
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(incomeMap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(populationMap);

// Use this link to get the GeoJSON data.
let link = "https://data.cityofdenton.com/dataset/0c4fcbc0-6c9a-4c76-98e2-d29f918e31c6/resource/be1b384f-3b2e-4238-88a8-4410cb36f7fc/download/c8efcc13-b5b4-48b5-9873-933844822d6ctexascounties.geojson";


//***********************************************************
//Income
//************************************************************

//get the data from the data that was scraped and sort it by income
let sortedByIncome = countyData.sort((a, b) => parseInt(b.Income) - parseInt(a.Income));
//place sorted data into easy to access arrays (they are all sorted the same and the same length)
let counties = sortedByIncome.map(object => object.County);
let coIncome = sortedByIncome.map(object => object.Income);
let coPopulation = sortedByIncome.map(object => object.Population);

//Set colors of counties based on per capita income (pci) in our scrape given the name from geojson file
function chooseIncColor(name) {
  let countyName = `${name}, TX`;
  for (let i = 0; i < counties.length; i++) {
    if (counties[i] == countyName) {
      let pci = coIncome[i].replace(/\,/g,'');
      pci = parseInt(pci); 
      return  pci < 40000  ? '#FEB24C' :
              pci < 50000  ? '#FD8D3C' :
              pci < 60000  ? '#FC4E2A' :
              pci < 70000  ? '#E31A1C' :
              pci < 90000  ? '#BD0026' :
             '#016b0d';
    }
  }
};

//Create the popup for each county using geojson name to find the values in our scrape data
function popupText(feature, layer) {
  let countyName = `${feature.properties.name}, TX`;
  for (let i = 0; i < counties.length; i++) {
    if (counties[i] == countyName) {
      layer.bindPopup(`<h1>${countyName}</h1><hr><h3>Per Capita Income: ${coIncome[i]}</h3><hr><h3>Population: ${coPopulation[i]}</h3>`);
    }
  }
}
// Getting our GeoJSON data
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data  

  L.geoJson(data, {
    // Styling each feature (in this case, a county)
    style: function(feature) {
      return {
        color: "white",
        // Call the chooseIncColor() function to decide which color to color our county. (The color is based on per capita income.)
        fillColor: chooseIncColor(feature.properties.name),
        fillOpacity: 0.5,
        weight: 1.5
      };
    },
    // This is called on each feature.
    onEachFeature: function(feature, layer) {
      // Set the mouse events to change the map styling.
      layer.on({
        // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },
      });
      // Giving each county a popup with information that's relevant to it
      popupText(feature, layer);

    }
  }).addTo(incomeMap);
});


   // *****************Add The Legend!!!
   var legend = L.control({position: 'topright'});

   legend.onAdd = function () {
   
       var div = L.DomUtil.create('div', 'info legend'),
           incomes = [0, 40000, 50000, 60000, 70000, 90000]
   
       // loop through our density intervals and generate a label with a colored square for each interval
       for (var i = 0; i < incomes.length-1; i++) {
        let legColor;
        if(incomes[i] + 1 < 10000){legColor= '#FEB24C'}
        else if(incomes[i] + 1 < 20000){legColor= '#FD8D3C'}
        else if(incomes[i] + 1 < 50000){legColor= '#FC4E2A'}
        else if(incomes[i] + 1 < 100000){legColor= '#E31A1C'}
        else if(incomes[i] + 1 < 500000){legColor= '#BD0026'}
        else {legColor= '#016b0d'}
  
           div.innerHTML +=`<i style= "background-color:${legColor};"></i>${incomes[i] / 1000}k &ndash; ${incomes[i + 1] / 1000}k<br>`
  
       }
  
       div.innerHTML += `<i style="background:#016b0d;'"></i>${incomes[incomes.length - 1]/1000}+k`
   
       return div;
   };
   
   legend.addTo(incomeMap);



//***********************************************************
//Population
//************************************************************

//get the data from the data that was scraped and sort it by population
let sortedByPopulation = countyData.sort((a, b) => parseInt(b.Population) - parseInt(a.Population));
//place sorted data into easy to access arrays (they are all sorted the same and the same length)
counties = sortedByPopulation.map(object => object.County);
coIncome = sortedByPopulation.map(object => object.Income);
coPopulation = sortedByPopulation.map(object => object.Population);


//Set colors per depth of counties based on population in our scrape given the name from geojson file
function chooseColor(name) {
  let countyName = `${name}, TX`;
  for (let i = 0; i < counties.length; i++) {
    if (counties[i] == countyName) {
      let coPop = coPopulation[i].replace(/\,/g,'');
      coPop = parseInt(coPop); 
      return  coPop < 10000  ? '#FEB24C' :
              coPop < 20000  ? '#FD8D3C' :
              coPop < 50000  ? '#FC4E2A' :
              coPop < 100000  ? '#E31A1C' :
              coPop < 500000  ? '#BD0026' :
             '#016b0d';
    }
  }
};



// Getting our GeoJSON data
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data  

  L.geoJson(data, {
    // Styling each feature (in this case, a county)
    style: function(feature) {
      return {
        color: "white",
        // Call the chooseColor() function to decide which color to color our county. (The color is based on the population.)
        fillColor: chooseColor(feature.properties.name),
        fillOpacity: 0.5,
        weight: 1.5
      };
    },

    // This is called on each feature.
    onEachFeature: function(feature, layer) {
      // Set the mouse events to change the map styling.
      layer.on({
        // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
        },
        // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },

      });
      // Giving each feature a popup with information that's relevant to it
      popupText(feature, layer);

    }
  }).addTo(populationMap);




});



   // *****************Add The Legend!!!
   var legend = L.control({position: 'topright'});

   legend.onAdd = function () {
   
       var div = L.DomUtil.create('div', 'info legend'),
           populations = [0, 10000, 20000, 50000, 100000, 500000]
   
       // loop through our density intervals and generate a label with a colored square for each interval
       for (var i = 0; i < populations.length-1; i++) {
        let legColor;
  
        if(populations[i] + 1 < 10000){legColor= '#FEB24C'}
        else if(populations[i] + 1 < 20000){legColor= '#FD8D3C'}
        else if(populations[i] + 1 < 50000){legColor= '#FC4E2A'}
        else if(populations[i] + 1 < 100000){legColor= '#E31A1C'}
        else if(populations[i] + 1 < 500000){legColor= '#BD0026'}
        else {legColor= '#016b0d'}
  
           div.innerHTML +=`<i style= "background-color:${legColor};"></i>${populations[i] / 1000}k &ndash; ${populations[i + 1] / 1000}k<br>`
  
       }
  
       div.innerHTML += `<i style="background:#016b0d;'"></i>${populations[populations.length - 1]/1000}+k`
   
       return div;
   };
   
   legend.addTo(populationMap);

   
  
  



