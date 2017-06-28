import 'whatwg-fetch';

export function request(city, cb) {
     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52d7e8bed91901222e31ebc77c311f2a`)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            if(cb) cb(json);
        })
        .catch(function(ex) {
            console.log('parsing failed', ex)
        });
}

export function checkEmptyObj(obj){
    for(let key in obj){
        return true
    }
    return false
}

export function updateLocalStorage(store){
    store.subscribe(() =>{
        localStorage.setItem('weatherStorage', JSON.stringify(store.getState()))
    })
}