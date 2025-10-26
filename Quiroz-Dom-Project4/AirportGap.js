document.getElementById('airportForm').addEventListener('submit', GetAirportData);

function GetAirportData(event) {
    event.preventDefault();
    var code = document.getElementById('code').value;
    if (code == "THU") {
        getDetails("THU");
    } else if (code == "YAY") {
        getDetails("YAY");
    } else if (code == "AEY") {
        getDetails("AEY");
    } else if (code == "LAE") {
        getDetails("LAE");
    } else if (code == "VEY") {
        getDetails("VEY");
    }
}

function getDetails(code) {
    var url = (`https://airportgap.com/api/airports/${code}`);
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayDetails(data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

function displayDetails(data) {
    var divInfo = document.getElementById('airportInfo');
    divInfo.innerHTML = '';
    if (data.data) {
        var airport = data.data;
        var name = airport.attributes.name;
        var city = airport.attributes.city;
        var country = airport.attributes.country;
        var timezone = airport.attributes.timezone;
        let airportHtml = `
            <p><strong>Airport Name:</strong> ${name}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Timezone:</strong> ${timezone}</p>
        `;
        divInfo.innerHTML = airportHtml;
        
    } else {
        AirportInfo.innerHTML = '<p>Failed to retrieve weather information.</p>';
    }
}