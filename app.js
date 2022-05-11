const options = {
    maximumAge: 0,
    enableHighAccuracy: false,
    timeout: 15000,
}

const result = document.querySelector("#result");


const success = (position) => {
    const coords = position.coords;
    result.textContent = `latitude : ${coords.latitude} & longitude : ${coords.longitude}`;
}

const error = (errorLog) => {
    result.textContent = errorLog;
}

navigator.geolocation.getCurrentPosition(success, error, options);