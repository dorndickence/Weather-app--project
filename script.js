const apiKey = "bf9eb8ecbabe50c04144078a67aabdbb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchinput");
const searchBtn = document.querySelector(".searchbutton");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    return data;
}

searchBtn.addEventListener("click", async () => {
    const city = searchBox.value;
    const data = await checkWeather(city);

    if (data.weather[0].main.toLowerCase() === "clouds") {
        weatherIcon.src = "178CE396-152D-4F1E-83BE-452DC9A8BDB2.png";
    } else if (data.weather[0].main.toLowerCase() === "clear") {
        weatherIcon.src = "E09EDD46-2EBB-48FD-A4EE-836F11C62FB1.png";
    } else if (data.weather[0].main.toLowerCase() === "rain") {
        weatherIcon.src = "17A7D794-19B2-4EC2-A6B5-F97AFBF838C8.png"; 
    } else if (data.weather[0].main.toLowerCase() === "drizzle") {
        weatherIcon.src = "4AAD07BB-9866-4BA6-9799-976C18EE5296.png";
    } else if (data.weather[0].main.toLowerCase() === "mist") {
        weatherIcon.src = "A70A6DFE-866F-4D8D-A839-51E74A1E3C43.png";
    }
});




/*
const apiKey = "bf9eb8ecbabe50c04144078a67aabdbb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchinput");
const searchBtn  = document.querySelector(".searchbutton");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(Main.data.temp)+ "C";
document.querySelector(".humidity ").innerHTML= data.Main.humidity + "%";
document.querySelector(".wind").innerHTML= data.wind.speed + "km/hr";

}


searchBtn.addEventListener("click",()=>{
     checkWeather(searchBox.value);

if(data.weather[0].main == "clouds"){
     weatherIcon.src ="img/20240514005120.png";
} else if (data.weather[0].main =="clear"){
     weatherIcon.src ="img/20240514005102.png";
} else if (data.weather[0].main =="Rain"){
     weatherIcon.src ="";
} else if (data.weather[0].main =="Drizzle"){
     weatherIcon.src ="img/20240514005114.png";
} else if (data.weather[0].main =="Mist"){
     weatherIcon.src ="img/20240514005108.png";

  
} 
    

})
*/