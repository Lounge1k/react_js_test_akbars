import '../styles/containers/_quarter.scss'

import React from 'react'
import BookingTime from '../containers/bookingTime'



const Quarter = (context) => {

    let daysHtml = []
    for(let i = 0;i<context.days;i++){
        daysHtml.push(<BookingTime room={context.room} day={i+1} key={i} />)
    }

    return (
        <div className='quarter'>
            {daysHtml}
        </div>
    )
};

export default Quarter