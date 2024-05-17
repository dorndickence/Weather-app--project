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
