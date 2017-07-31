import'../styles/containers/_month.scss';
import '../styles/icon-moon/style.scss';

import React from 'react'
import PropTypes from 'prop-types'


const Months = ({ month, prevWeek, nextWeek }) => {

    return (
        <div className='month-container'>
            <span className='icon icon-arrow-left2' onClick={prevWeek}></span>
            <div className='month-name'>{month}</div>
            <span className='icon icon-arrow-right2' onClick={nextWeek}></span>
        </div>
    )
}

Months.PropTypes = {
    month: PropTypes.string.isRequired,
    nextWeek: PropTypes.func.isRequired,
    prevWeek: PropTypes.func.isRequired
};

export default Months