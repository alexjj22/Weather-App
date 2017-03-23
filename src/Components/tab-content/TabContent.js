/**
 * Created by bigdrop on 13.03.17.
 */

import React from 'react';
import Describing from './Describing';
import Wind from './Wind';
import Common from './Common';

const TabContent = ()=> {
    return (
        <div className='content'>
            <ul className="weather-describer">
                <Describing/>
                <Wind/>
                <Common/>
            </ul>
        </div>
    )
};

export default TabContent;

