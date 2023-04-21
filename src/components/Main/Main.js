import React from 'react';

import {Filter, News, Builds} from '../index'
import css from './Main.module.css'

const Main = () => {
    return (
        <div className={css.Main}>
            {/*<div>*/}
            {/*    <News/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Filter/>*/}
            {/*</div>*/}
            <div className={css.Builds}>
                <Builds/>
            </div>
        </div>
    );
};

export {Main};