import 'whatwg-fetch';

export function request(city, cb) {
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80c148bcd1c921794550486e1c9597b4`);
    // xhr.send();
    // xhr.onreadystatechange = () => {
    //     if (xhr.readyState !== 4 || xhr.status !== 200) return;
    //
    //     const response = JSON.parse(xhr.responseText);
    //     console.log( response );
    //     cb(response);
    //
    // };

     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52d7e8bed91901222e31ebc77c311f2a`)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            // console.log(json);
            if(cb) cb(json);
        })
        .catch(function(ex) {
            console.log('parsing failed', ex)
        })
}
