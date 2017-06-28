/**
 * Created by bigdrop on 13.03.17.
 */
import React from 'react';

const TabTitle = (props) => {
    const {cityName, currentCity, onGetForecast, onDeleteCity} = props;

    return (
        <li className={ currentCity === cityName ? 'active-title' : '' } >
            <a
                href="#"
                onClick={ ()=> { if(currentCity !== cityName) onGetForecast(cityName) }  }
            >{ cityName }</a>
            <span
                className="remove"
                onClick={ ()=> onDeleteCity(cityName) }
            />
        </li>
    )
};

export default TabTitle;