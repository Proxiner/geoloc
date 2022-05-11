const options = {
    maximumAge: 0,
    enableHighAccuracy: false,
    timeout: 15000,
}

const success = (position) => {
    let result = document.querySelector("#result");
    const coords = position.coords;
    result.textContent = `Latitude : ${coords.latitude} & Longitude : ${coords.longitude}`;
}

const error = (errorLog) => {
    console.log(errorLog);
}

navigator.geolocation.getCurrentPosition(success, error, options);


// let locations = {
//     homeLat: 48.856614,
//     homeLong: 2.3522219,
//     officeLat: null,
//     officeLong: null,
// }

// let myLocation = document.querySelector("#location");

// if (coords.latitude === locations.homeLat && coords.longitude === locations.homeLong) {
    //     myLocation.textContent = "Your at Home";
    // } else {
        //     myLocation.textContent = "Your Not at Home"
        // }

