const APPID = '52d7e8bed91901222e31ebc77c311f2a';

export function getForecast(cityName){
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APPID}`;
  return window.fetch(url)
}