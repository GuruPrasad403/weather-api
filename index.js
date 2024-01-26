"use strict"
const text = document.querySelector("#Loc");
const btn = document.querySelector("#get");
const deg = document.querySelector(".value");
const area = document.querySelector(".temp-value h3 span");
const dis = document.querySelector(".dic");
const temp = document.querySelector(".types #temp");
const wind = document.querySelector(".types #wind");
const ap = document.querySelector(".types #ap");
const API ="574c898bcb650d654b4455bb9cf103d2" 
btn.addEventListener('click',(e)=>{
    if(text.value){
        getData();
    }
    else{
        text.setAttribute("placeholder","Enter the valid Location")
    }
})

function getData(){
const url = `https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=${API}`

    const e = fetch(url)
    .then(res =>{
        if(!res.ok){
            return("error")
        }
        else{
            return res.json();
        }
    }).then(data =>{
        console.log(data)
        deg.innerHTML=Math.round((data.main.temp)-273.15)
        area.innerHTML=`${data.name}, ${data.sys.country}`
        let [a] = data.weather
        dis.innerHTML=a.description;
        temp.innerHTML = `${data.main.humidity}%`
        wind.innerHTML = `${data.wind.speed}mps`
        ap.innerHTML = `${data.main.pressure}`
    })
    
}
