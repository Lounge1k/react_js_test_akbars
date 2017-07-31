import '../styles/containers/_day.scss';
import '../styles/icon-moon/style.scss';

import React from 'react'
import Hour from './Hour'
import PropTypes from 'prop-types'

let Day = ({hours,bookTime}) => {

    return (
        <div className='day'>
            {hours.map(hour=>
            <Hour
                key={hour.id}
                {...hour}
                onClick={() => bookTime(hour.id, !hour.booked)}
                />
            )}
        </div>
    )
};

Day.PropTypes={
    bookTime: PropTypes.func,
    hours: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        booked: PropTypes.bool.isRequired,
        time: PropTypes.string.isRequired
    }).isRequired).isRequired,
}

export default Day