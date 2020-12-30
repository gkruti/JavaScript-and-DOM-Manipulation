// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
console.log(data);

// Loop through 'data' 

data.forEach(function(sightings) {
    console.log(sightings);
    var row = tbody.append("tr");

    Object.entries(sightings).forEach(function([key,value]){
        console.log(key, value)

        var cell = row.append("td");
        cell.text(value);
});
});

var button = d3.select("#button");

button.on("click", function() {

    d3.select("tbody").html("");

    d3.event.preventDefault();
    //tbody.html("");

    var inputElement = d3.select('#date-time');

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredTable = data.filter(sightings => sightings.datetime === inputValue);

    console.log(filteredTable);
    filteredTable.forEach(function(sightingsFiltered){
        console.log(sightingsFiltered);

        var rowFiltered = tbody.append("tr");

        Object.entries(sightingsFiltered).forEach(function([key, value]) {
            console.log(key, value);
        var cellFiltered = rowFiltered.append("td");
            cellFiltered.text(value);

        })
    })

});