
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
    alert(`lat : ${Math.round(coords.latitude)} & Long : ${Math.round(coords.longitude)}`)


    if (coords.latitude === locations.homeLat && coords.longitude === locations.homeLong) {
        myLocation.textContent = "Your at Home";
        let result = `🏢 ورود به شرکت آی تی مبنا                                            🕰️ ساعت ${timeNow}`;
        window.open(`https://api.whatsapp.com/send?phone=989123657098&text=${result}&source=&data=`);
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




