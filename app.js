const options = {
    maximumAge: 0,
    enableHighAccuracy: false,
    timeout: 15000,
}

const locations = {
    homeLat: 48.856614,
    homeLong: 2.3522219,
    officeLat: null,
    officeLong: null,
}

let result = document.querySelector("#result");

let myLocation = document.querySelector("#location");

const success = (position) => {
    const coords = position.coords;

    result.textContent = `Latitude : ${coords.latitude} & Longitude : ${coords.longitude}`;

    if (coords.latitude === locations.homeLat && coords.longitude === locations.homeLong) {
        myLocation.textContent = "Your at Home";
        // window.open("https://www.itmabna.com");
    } else {
        myLocation.textContent = "Your Not at Home"
    }
}

const error = (errorLog) => {
    console.log(errorLog);
}

navigator.geolocation.getCurrentPosition(success, error, options);