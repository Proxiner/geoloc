
let locations = {
    homeLat: 48.856614,
    homeLong: 2.3522219,
    officeLat: null,
    officeLong: null,
}

const options = {
    maximumAge: 0,
    enableHighAccuracy: false,
    timeout: 15000,
}

const success = (position) => {
    let result = document.querySelector("#result");
    let myLocation = document.querySelector("#location");
    const coords = position.coords;
    console.log(coords.latitude, coords.longitude);
    result.textContent = `Latitude : ${coords.latitude} & Longitude : ${coords.longitude}`;


    if (coords.latitude === locations.homeLat && coords.longitude === locations.homeLong) {
        myLocation.textContent = "Your at Home";
    } else {
        myLocation.textContent = "Your Not at Home"
    }
}

const error = (errorLog) => {
    console.log(errorLog);
}

navigator.geolocation.getCurrentPosition(
    success,
    error,
    options);




