/**
 * Created by bigdrop on 13.03.17.
 */
import React from 'react';

const Describing = (props) =>{
    const arr = props.forecast.weather;
    const text = arr.reduce( (sum, current)=> sum + current.description + ', ', '' );
    return (
        <li className="description">
            <h4>Description</h4>
            <p>{ text }</p>
        </li>
    )
};

export default Describing;