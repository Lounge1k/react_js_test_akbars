import '../styles/containers/_week.scss';

import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'

let WeekDays = ({start}) => {

    let weekDays = [];

    for(let i=0;i<=4;i++ ){
        let time = moment(start).add(i,'days').format('D dd')
        weekDays.push(
            <div key={i} className='week-day'>
                <div>{time}</div>
            </div>
        )
    }

    return (
        <div className='week'>
            {weekDays}
        </div>
    )
}




const mapStateToProps = (state) => ({
    start: moment(state.switchTime),
})

WeekDays = connect(mapStateToProps)(WeekDays);

export default WeekDays