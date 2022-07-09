// import the data from the data.js
const tableData = data;

// reference the HTML data using d3
var tbody = d3.select("tbody");

// create a function to build a table
function buildTable(data) {
  // clear table from any existing data
  tbody.html("");

    // add the for each function to iterate through the data
    data.forEach((dataRow)=> {
      // add variable to append the rows to the table body
      let row = tbody.append("tr");
    
    // loop through each field in the data row and add each value as a table cell
    Object.values(dataRow).forEach((val)=> {
    // crate variable to append data into table
    let cell = row.append("td");
    cell.text(val);

    }   
  );
});
}

// create a function to filter by date
function handleClick () {
    let date = d3.select("#datetime").property("value");
// create variable for filter data
    let filteredData = tableData;

// create if function to return data filtered by date
if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
};

//rebuild the table using the filtered data --if no date was enetered then filtereData will just be table data
buildTable(filteredData);
};

// Attach an event to liosted for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table for when the page loads
buildTable(tableData);