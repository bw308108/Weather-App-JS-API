const client_key = '508347a31787d61932312fe35870f913'

const get_weather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=508347a31787d61932312fe35870f913`, {
        method: 'POST',
    })
    const data = await response.json()
    console.log(data)




    const city_name = document.createElement('h1')
    city_name.innerText = data['name']
    const high = document.createElement('h2')
    high.innerText = "High:" + data['main']['temp_max']+"°"
    const low = document.createElement('h2')
    low.innerText = "Low:" + data['main']['temp_min']+"°"
    const hum = document.createElement('h2')
    hum.innerText = "Humidity:" + data['main']['humidity']+"%"
    const temp = document.createElement('h2')
    temp.innerText ="Current:" +  data['main']['temp']+"°"
    const weather_img = document.createElement('img')      
    weather_img.setAttribute("src",  `http://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`)
    const forecast = document.createElement('h2')
    temp.innerText ="Forecast:" +  data['weather'][0]['main']

    document.querySelector('.weather-page').append(city_name)
    document.querySelector('.weather-page').append(high)
    document.querySelector('.weather-page').append(low)
    document.querySelector('.weather-page').append(hum)
    document.querySelector('.weather-page').append(temp)
    document.querySelector('.weather-page').append(weather_img)
    document.querySelector('.weather-page').append(forecast)
    
}

const weather_data = document.querySelector('form')
weather_data.addEventListener('submit', (event) =>{
     event.preventDefault()
     const cityname = document.querySelector('#weather-data').value
     get_weather(cityname)
 })


