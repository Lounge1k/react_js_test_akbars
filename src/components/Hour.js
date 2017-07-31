import '../styles/containers/_hour.scss'

import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

let Hour = ({onClick,booked,time}) => {

    let iconClass = classNames({
        icon: true,
        'icon-minus':booked,
        'icon-plus':!booked
    });

    return (
        <div className='hour'
             onClick={onClick}
             style={{backgroundColor: booked ? '#dbdbdb' : '#ffffff'}}>
            <span>{time}</span>
            <span className={iconClass}></span>
        </div>
    )
};


Hour.PropTypes = {
    booked: PropTypes.bool.isRequired,
    time: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Hour