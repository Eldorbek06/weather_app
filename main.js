// import axios from "axios"
// let h1 = document.querySelector('h1')
// let wind = document.querySelector('#wind')
// let hum = document.querySelector('#hum')
// let searchInp = document.querySelector('input')
// let searchBTN = document.querySelector('#searchBTN')

// let API_KEY = '4f9dc827356314629e9dd48d2cebf4fa'

// getWeather()
// function getWeather(city = "samarkand") {
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
//     .then(({data}) => {
//         console.log(data);
//         h1.innerHTML = Math.round(data.main.temp) + "°"
//         wind.innerHTML = `${data.wind.speed} km/h`
//         hum.innerHTML = `${data.main.humidity} %`
//     })
// }

// axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=samarkand&appid=${API_KEY}&units=metric`)
//     .then(res => console.log(res))

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

// // console.log(new Date());


// // switch(month) {
// //     case 0:
// //         return 'January'
// //         break
// //     case 0:
// //         return 'January'
// //     case 0:
// //         return 'January'
// // }