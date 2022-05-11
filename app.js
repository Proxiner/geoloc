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

const result = document.querySelector("#result");

const location = document.querySelector("#location");

const success = (position) => {
    const coords = position.coords;
    result.textContent = `latitude : ${coords.latitude} & longitude : ${coords.longitude}`;

    if (coords.latitude === locations.homeLat && coords.longitude === locations.homeLong) {
        location.textContent = "Your at home";
    }
}

const error = (errorLog) => {
    result.textContent = errorLog;
}

navigator.geolocation.getCurrentPosition(success, error, options);