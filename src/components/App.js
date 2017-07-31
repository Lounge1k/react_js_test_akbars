require('../styles/containers/_app.scss');

import React from 'react'
import MonthSwitcher from '../containers/monthSwitcher'
import Room from './Room'
import WeekDays from './WeekDays'

const App = () => (
    <div>
        <h1>Бронирование переговорок</h1>
        <div className='container'>
           <div className='row header'>
               <div className='row-name'>Комната</div>
               <div className='row-content'>
                   <MonthSwitcher />
               </div>
           </div>
            <div className='row header'>
                <div className='row-name'></div>
                <div className='row-content'>
                    <WeekDays/>
                </div>
            </div>
            <Room name='Зеленая' seats='5' />
            <Room name='Красная' seats='15' />
            <Room name='Синяя' seats='25' />
            <Room name='Фиолетовая' seats='25' />
        </div>
    </div>
)


export default App
