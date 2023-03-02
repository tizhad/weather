// export default function setResponse(response) {
//   console.log(setResponse, "called with", response);
//   if (response) {
//     return {
//       city: response.list[0].main.temp,
//       temp: response.list[0].main.temp,
//       feels_like: response.list[0].main.feels_like,
//       temp_min: response.list[0].main.temp_min,
//       temp_max: response.list[0].main.temp_max,
//       humidity: response.list[0].main.humidity,
//       windSpeed: response.list[0].wind.speed,
//       description: response.list[0].weather[0].description,
//       icon: `http://openweathermap.org/img/wn/${response.list[0].weather[0].icon}@2x.png`,
//     };
//   }
//   return null;
// }
