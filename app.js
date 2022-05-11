
var timer = null;

//when the window is minimized or when user is in different tab . 
window.addEventListener('blur', function () {

    timer = setInterval(function () {

        window.location.reload(1);

    }, 5000)

}, false);

let locations = {
    // homeLat: 35.6719733,
    // homeLong: 51.0401086,
    homeLat: 36,
    homeLong: 51,
    officeLat: null,
    officeLong: null,
}

const options = {
    maximumAge: 0,
    enableHighAccuracy: false,
    timeout: 15000,
}

const success = (position) => {
    let today = new Date();
    let timeNow = today.getHours() + ":" + ("0" + today.getMinutes()).slice(-2);

    let myLocation = document.querySelector("#location");
    const coords = position.coords;

    if (Math.round(coords.latitude) === locations.homeLat && Math.round(coords.longitude) === locations.homeLong) {
        myLocation.textContent = "Your at Home";
        let result = `🏢 ورود به شرکت آی تی مبنا                                            🕰️ ساعت ${timeNow}`;
        setTimeout(() => {
            window.open(`https://api.whatsapp.com/send?phone=989123657098&text=${result}&source=&data=`);
        }, 3000);
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




