/**
 * Created by bigdrop on 13.03.17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';


class Describing extends Component{
    render(){
        const arr = this.props.weather.weather;
        const text = arr.reduce( (sum, current)=> sum + current.description + ', ', '' );

        return ( <li className="description">
            <h4>Description</h4>
            <p>{ text }</p>
        </li> );
    }
}


function mapStateToProps(state) {
    return {
        weather: state.cityWeather
    }
}

export default connect(
    mapStateToProps,
    null
)(Describing);