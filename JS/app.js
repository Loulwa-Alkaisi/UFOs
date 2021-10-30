// import the data from data.js
const tableData = data;

//reference the HTML table using d3.
var tbody = d3.select("tbody");

// First, clear out any existing data
function buildTable(data) {
    tbody.html("");

    // Next, loop through each object in the data and append a row
    // and cells for each value.
    data.forEach((dateRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
    Object.values(datarow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
});
}