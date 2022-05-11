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


let myLocation = document.querySelector("#location");

const success = (position) => {
    const coords = position.coords;

    if (coords.latitude === locations.homeLat && coords.longitude === locations.homeLong) {
        myLocation.textContent = "Your at Home";
        setTimeout(window.open("https://www.itmabna.com"), 2000);
    } else {
        myLocation.textContent = "Your Not at Home"
    }
}

const error = (errorLog) => {
    console.log(errorLog);
}

navigator.geolocation.getCurrentPosition(success, error, options);