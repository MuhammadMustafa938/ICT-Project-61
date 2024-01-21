// script.js

function displayInfo() {
    // Get values from the form
    var name = document.getElementById("name").value;
    var travelClass = document.querySelector('input[name="class"]:checked');
    var occupation = document.getElementById("occupation").value;
    var fromCity = document.getElementById("fromCity").value;
    var toCity = document.getElementById("toCity").value;

    // Validate if all fields are filled
    if (name === "" || !travelClass || occupation === "" || fromCity === "" || toCity === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Create a new row in the table
    var table = document.getElementById("userInfoTable");
    var newRow = table.insertRow(-1);

    // Insert cells into the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    // Populate cells with user information
    cell1.innerHTML = name;
    cell2.innerHTML = travelClass.value;
    cell3.innerHTML = occupation;
    cell4.innerHTML = fromCity;  // Corrected: Use the selected option's text content
    cell5.innerHTML = toCity;    // Corrected: Use the selected option's text content

    // Clear form fields after submission
    document.getElementById("name").value = "";
    travelClass.checked = false;
    document.getElementById("occupation").value = "";
    document.getElementById("fromCity").value = "";
    document.getElementById("toCity").value = "";
}
