// let API_KEY = '4f9dc827356314629e9dd48d2cebf4fa'

import axios from "axios"

new Swiper('.swiper', {
    navigation: {
        nextEl: '.info_block',
        prevEl: 'section header button'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    touchRatio: 0
})

let API_KEY = 'e2e72e00cf3965575c262fa94bf0ea84'
let searchInp = document.querySelector('input')
let main_page_date = document.querySelector('.info_block .date span')
let main_page_img = document.querySelector('#main_page_img')
let main_page_deg = document.querySelector('.info_block h1')
let main_page_wind = document.querySelector('#wind_view')
let main_page_hum = document.querySelector('#hum_view')
let second_page_date  = document.querySelector('header p')
let form = document.forms.search
let byDays_cont = document.querySelector('#sec_1 main')
let byHours_cont = document.querySelector('#sec_2 main')
let defaultCity = 'samarkand'
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let newDate = new Date()


second_page_date.innerHTML = `${months[newDate.getMonth()]}, ${newDate.getDate()}`
main_page_date.innerHTML = `${newDate.getDate()} ${months[newDate.getMonth()]}`

getWeather(defaultCity)
function getWeather(city) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(({data}) => {
            main_page_deg.innerHTML = Math.round(data.main.temp) + "°"
            main_page_wind.innerHTML = `${data.wind.speed} km/h`
            main_page_hum.innerHTML = `${data.main.humidity} %`
            main_page_img.src = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`
    })
}

form.onsubmit = (e) => {
    e.preventDefault()
    getWeather(searchInp.value.trim())
	getForecastWeather(defaultCity)
    form.reset()
}

getForecastWeather(defaultCity)
function getForecastWeather(city) {
axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
    .then(({data}) => {
		console.log(data);
        let today = data.list.filter(el => newDate.getDate() === +el.dt_txt.slice(8,10))
		byDays_cont.innerHTML = ''
        for(let item of today){
            byDays_cont.innerHTML += 
			`
            <div class="byHours">
                <p>${Math.round(item.main.temp)}°C</p>
                <img src="https://openweathermap.org/img/wn/${item.weather[0]['icon']}.png" alt="image">
                <p>${item.dt_txt.slice(11, 16)}</p>
            </div>
            `
        }
    })
}

// icons url https://openweathermap.org/img/wn/02n.png

// searchBTN.onclick = () => {
//     getWeather(searchInp.value)
// }

// document.addEventListener('touchstart', handleTouchStart, false);        
// document.addEventListener('touchmove', handleTouchMove, false);

// var xDown = null;                                                        
// var yDown = null;

// function getTouches(evt) {
//   return evt.touches              // browser API
//         //  evt.originalEvent.touches; // jQuery
// }                                                     
                                                                         
// function handleTouchStart(evt) {
//     const firstTouch = getTouches(evt)[0];                                      
//     xDown = firstTouch.clientX;                                      
//     yDown = firstTouch.clientY;                                      
// };                                                
                                                                         
// function handleTouchMove(evt) {
//     if ( ! xDown || ! yDown ) {
//         return;
//     }

//     var xUp = evt.touches[0].clientX;                                    
//     var yUp = evt.touches[0].clientY;

//     var xDiff = xDown - xUp;
//     var yDiff = yDown - yUp;
                                                                         
//     if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
//         if ( xDiff > 0 ) {
//             /* right swipe */ 
//             console.log('right swipe');
//         } else {
//             /* left swipe */
//             console.log('left swipe');
//         }                       
//     } else {
//         if ( yDiff > 0 ) {
//             /* down swipe */ 
//         } else { 
//             /* up swipe */
//         }                                                                 
//     }
//     /* reset values */
//     xDown = null;
//     yDown = null;                                             
// };

// console.log(new Date());


// switch(month) {
//     case 0:
//         return 'January'
//         break
//     case 0:
//         return 'January'
//     case 0:
//         return 'January'
// }