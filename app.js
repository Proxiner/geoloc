let locations = {
    homeLat: 35.678715,
    homeLong: 51.0417084,
    officeLat: null,
    officeLong: null,
}

const options = {
    maximumAge: 0,
    enableHighAccuracy: true,
    timeout: 5000,
}


let today = new Date();
let timeNow = today.getHours() + ":" + ("0" + today.getMinutes()).slice(-2);

function sendMail() {
    let templateParams = {
        senderName: "مهدی علیخانی",
        message: `🏢 ورود به شرکت آی تی مبنا                                            🕰️ ساعت ${timeNow}`,
    };

    emailjs.send('service_way4a31', 'template_il71eei', templateParams)
        .then(function (response) {
            alert('گزارش داده شد!', response.status, response.text);
        }, function (error) {
            alert('به مشکل بر خوردید!', error);
        });
}


const success = (position) => {

    let myLocation = document.querySelector("#location");
    const coords = position.coords;
    alert(`Your Lattidude : ${coords.latitude} & Longitude : ${coords.longitude}`);

    if (coords.latitude === locations.homeLat && coords.longitude === locations.homeLong) {
        myLocation.textContent = "Your at Home";
        // sendMail();

    } else {
        myLocation.textContent = "Your Not at Home";
    }
}


const error = (errorLog) => {
    console.log(errorLog);
}

navigator.geolocation.getCurrentPosition(
    success,
    error,
    options);