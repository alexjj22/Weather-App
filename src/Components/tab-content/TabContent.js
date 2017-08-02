/**
 * Created by bigdrop on 13.03.17.
 */

import React from 'react';
import Describing from './Describing';
import Wind from './Wind';
import Common from './Common';

const TabContent = (props)=> {
    return (
        <div className='content'>
            <ul className="weather-describer">
                <Describing forecast={props.forecast}/>
                <Wind forecast={props.forecast}/>
                <Common forecast={props.forecast}/>
            </ul>
        </div>
    )
};

export default TabContent;
