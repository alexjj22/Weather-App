import { decorate, observable, action, autorun, /*when, reaction, spy  trace */} from "mobx";
import {
  getForecast
} from '../api'
import {
  setWeatherStorage,
  getCurrentCity,
  getCityList
} from '../functions/storageFunctions';

class WeatherStore{
  isLoading = false;
  error = null;
  forecast = null;
  cityList = getCityList() || [];
  currentCity = getCurrentCity() || "";

  constructor(){
    let firstRun = true;

    autorun(() => {
      const currentCity = this.currentCity;
      const cityList = this.cityList;

      if (!firstRun) {
        const dataToStore = {
          currentCity,
          cityList
        };

        setWeatherStorage(dataToStore);
      } else {
        currentCity && this.onGetApi(currentCity);
      }

      firstRun = false;
    });

    // when(
    //   () => this.currentCity === 'Lviv',
    //   () => console.log('when event')
    // );

    // reaction(
    //   () => this.cityList.map(({ city }) => city),
    //   cities => console.log('cities', cities.join(', '))
    // )

    // spy((event) => {
    //   if (event.type === 'action') {
    //     // console.log(`${event.name} with args: ${event.arguments}`)
    //   }
    // })
  }

  onGetApi(cityName){

    this.isLoading = true;

    getForecast(cityName)
      .then(
        res => res.json()
      )
      .then(
        action(data => {
          if(data.cod === 200) {
            const isInArray = this.cityList.some( item => item.city === cityName );

            this.isLoading = false;
            this.forecast = data;
            this.currentCity = cityName;

            if(!isInArray){
              this.cityList.push({
                id: data.id,
                city: cityName
              });
            }
          } else {
            throw new Error(data.message);
          }
        })
      )
      .catch(
        action(error => {
          this.isLoading = false;
          this.error = error;
          alert('Your city is not found')
        })
      )
    ;
  }

  onDeleteCity(cityName){
    this.cityList = this.cityList.filter( ({ city }) => city !== cityName );

    if(cityName === this.currentCity){
      this.forecast = {};
      this.currentCity = "";
    }
  }
}

export default decorate(WeatherStore, {
  error: observable,
  forecast: observable,
  cityList: observable,
  currentCity: observable,
  isLoading: observable,
  onGetApi: action.bound,
  onDeleteCity: action.bound,
})
