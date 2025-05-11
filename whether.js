//const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
///https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=5e8b7f3406ffd9d571847b626ba3f339&q=";
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
   let response = await fetch(apiUrl + city )
var data = await response.json()
console.log(data)
   document.querySelector(".city").innerHTML = data.name
   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
   document.querySelector(".wind").innerHTML = data.wind.speed +"km/h"

if(data.weather[0].main =="Clouds"){
   weatherIcon.src = "clouds.png"
}
else if(data.weather[0].main =="Clear"){
   weatherIcon.src = "clear.png"
}
else if(data.weather[0].main =="Rain"){
   weatherIcon.src = "rain.png"
}
else if(data.weather[0].main =="Drizzle"){
   weatherIcon.src = "drizzle.png"
}
else if(data.weather[0].main =="Mist"){
   weatherIcon.src = "mist.png"
}




}

searchbtn.addEventListener("click",()=>{
   checkWeather(searchbox.value)
})


