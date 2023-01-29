import React from 'react';

import {Filter, DrinksSmallInfo, News} from '../index'

const Main = () => {
    return (
        <div>
            <div>
                <News/>
            </div>
            <div>
                <Filter/>
            </div>
            <div>
                <DrinksSmallInfo/>
            </div>
        </div>
    );
};

export {Main};