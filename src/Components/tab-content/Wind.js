/**
 * Created by bigdrop on 21.03.17.
 */

import React, { Component } from 'react';

export default class Wind extends Component{
    constructor(props){
        super(props);

        this._timeout = 100;
    }

    showSpeed(speed){
        const block = this.speedBlock;
        let interval = Math.floor( 200 / speed );
        let val = 0;

        let timer = setInterval( function(){
            val = (val * 10 + 1) / 10;
            if(val > speed){
                clearInterval(timer);
                return;
            }
            block.textContent = val;
        }, interval);
    }

    showWindDirection(degree){
        this.arrow.style.transform = `rotate(${135 + degree}deg)`;
    }

    windAnimation(){
        const {wind} = this.props.forecast;

        setTimeout( ()=> {
            this.showWindDirection( wind.deg );
            this.showSpeed( wind.speed );
        }, this._timeout);
    }

    componentDidUpdate(nextProps){
        if( nextProps.forecast.name !== this.props.forecast.name ){
            this.windAnimation();
        }
    }

    render(){
        return (
            <li>
                <h4>Wind</h4>
                <svg  x="0px" y="0px"
                      viewBox="0 0 508 508" className="compass-img">
                    <circle className="circle1" cx="254" cy="254" r="254"/>
                    <circle className="circle2" cx="254" cy="254" r="194"/>
                    <circle className="circle3" cx="254" cy="254" r="160"/>
                    <path className="path1" d="M133.2,276.7h-5.4c9.4,52.4,50.8,93.7,103.1,103.1v-5.4C181.5,365.2,142.4,326.1,133.2,276.7z
                	 M127.8,231.3h5.4c9.3-49.4,48.3-88.5,97.7-97.7v-5.4C178.6,137.6,137.2,179,127.8,231.3z M374.1,231.3h5.4
                	c-9.4-52.3-50.7-93.8-103.1-103.1v5.4C325.7,142.8,364.8,181.9,374.1,231.3z M276.3,374.4v5.4c52.4-9.4,93.7-50.7,103.1-103.1H374
                	C364.8,326.1,325.7,365.2,276.3,374.4z"/>
                    <g>
                        <path className="path2" d="M261.5,115.4h7.4v33h-7.4l-15.7-20.7v20.7h-7.4v-33h6.9l16.2,21.2V115.4z"/>
                        <path className="path2" d="M391.1,237.5v6.6h-16.4v6.8h14.8v6.3h-14.8v6.8h17v6.5h-24.3v-33H391.1z"/>
                        <path className="path2" d="M118.1,256.5l5.9-19h7.7l5.8,19l6.6-19h8l-11.5,33H135l-7.2-22.9l-7.2,22.9h-5.5l-11.5-33h8
                		L118.1,256.5z"/>
                        <path className="path2" d="M250.6,366.1c-0.7,0.6-1.1,1.4-1.1,2.3c0,1,0.4,1.7,1.3,2.3c0.9,0.6,2.9,1.2,6,2
                		c3.1,0.8,5.6,1.9,7.3,3.5c1.7,1.5,2.6,3.8,2.6,6.8s-1.1,5.4-3.3,7.2c-2.2,1.8-5.1,2.8-8.8,2.8c-5.2,0-9.9-1.9-14.1-5.8l4.4-5.4
                		c3.6,3.1,6.8,4.7,9.9,4.7c1.4,0,2.4-0.3,3.2-0.9c0.8-0.6,1.2-1.4,1.2-2.4s-0.4-1.8-1.2-2.4c-0.8-0.6-2.4-1.2-4.9-1.8
                		c-3.8-0.9-6.6-2.1-8.4-3.6c-1.8-1.5-2.7-3.8-2.7-6.9s1.1-5.5,3.4-7.2c2.2-1.7,5.1-2.5,8.4-2.5c2.2,0,4.4,0.4,6.6,1.1
                		c2.2,0.8,4.1,1.8,5.8,3.2l-3.7,5.4c-2.9-2.2-5.8-3.3-8.9-3.3C252.3,365.3,251.3,365.5,250.6,366.1z"/>
                    </g>

                    <polygon className="polygon1" points="262.8,262.8 332.3,254 262.8,245.2 254,175.7 245.2,245.2 175.7,254 245.2,262.8 254,332.3
                	"/>
                    <g className="arrow" ref={arrow => this.arrow = arrow}>
                        <polygon className="polygon2" points="320.1,187.9 230.8,230.8 187.9,320.1 277.2,277.2 "/>
                        <polygon className="polygon3" points="230.9,230.8 230.8,230.8 187.9,320.1 277.2,277.2 277.2,277.1 "/>
                    </g>
                    <circle className="circle4" cx="254" cy="254" r="20"/>
                </svg>
                <span className="speed" ref={speedBlock => this.speedBlock = speedBlock}>0</span>
            </li>
        )
    }
    componentDidMount(){
        this.windAnimation();
    }
}

