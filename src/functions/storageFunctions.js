/**
 * Created by Александр on 09.07.2017.
 */
export function setDefaultStorage() {
    const initialState = {
        cityList: [
            {city: "London", id: "2643743"},
            {city: "Paris", id: "2988507"}
        ],
        forecast: {},
        currentCity: ''
    };

    if (!localStorage.getItem('weatherStorage')) {
        localStorage.setItem('weatherStorage', JSON.stringify(initialState));
        return initialState;
    } else {
        const storage = JSON.parse(localStorage.getItem('weatherStorage'));
        return {
            ...storage,
            forecast: {}
        }
    }
}

export function updateLocalStorage(store){
    store.subscribe(() =>{
        localStorage.setItem('weatherStorage', JSON.stringify(store.getState().weather))
    })
}