const icon = document.getElementById("icon");
const temp = document.getElementById("temp");
const place = document.getElementById("place");
const time = document.getElementById("time");
const name = document.getElementById("name");
const input_name = document.getElementById("input_name");

navigator.geolocation.getCurrentPosition(position => getWeather(position.coords),e => console.log(e.message)) ;

async function getWeather({latitude, longitude}) {
    console.log(latitude, longitude);
    const weather = await fetch(`
    http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2313f72f528ba9b181f713691469a1df&units=metric`);
    console.log(weather);
    const data =  await weather.json();
    console.log(data);
    temp.innerHTML = data.main.temp + "C";
    place.innerHTML = data.name;
    const icon_weather = data.weather[0].main;
    console.log(icon_weather);
    switch(icon_weather) {
        case "Mist": icon.classList.add("mdi-weather-fog");
        case "ThunderStorm": icon.classList.add("mdi-weather-lightening");
    }
}

function showWeather() {

}

name.addEventListener("click", function() {
    input_name.style.display="inline-block";
    input_name.value = name.innerText;
    name.style.display = "none";
})

function showName() {
    name.innerText = localStorage.getItem("name");
    input_name.style.display="none";
    name.style.display = "inline-block";
}

input_name.addEventListener("change", function () {
    //event.preventDefault();
    const name_value = input_name.value;
    //console.log(name_value);
    localStorage.setItem("name",name_value);
    showName();
})

function showTime() {
    const now = new Date();
    time.innerText = now.toLocaleTimeString().slice(3);
}

showTime();
setInterval(showTime,1000);