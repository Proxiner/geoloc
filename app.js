
let locations = {
    homeLat: 35.6719733,
    homeLong: 51.0401086,
    officeLat: null,
    officeLong: null,
}

const options = {
    maximumAge: 0,
    enableHighAccuracy: false,
    timeout: 15000,
}

const success = (position) => {
    let myLocation = document.querySelector("#location");
    const coords = position.coords;


    if (coords.latitude === locations.homeLat && coords.longitude === locations.homeLong) {
        myLocation.textContent = "Your at Home";
        window.open("https://www.itmabna.com");
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




