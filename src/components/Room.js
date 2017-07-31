import '../styles/containers/_room.scss';

import React from 'react'
import PropTypes from 'prop-types'
import Quarter from './Quarter'


const Room = (context) => {

    return (
        <div className='room'>
            <div className='room-info'>
                <div className='room-info-name'>{context.name}</div>
                <div className='room-info-seats'>(до {context.seats} персон)</div>
            </div>
            <div className='room-content'>
                <Quarter room={context.name} days={5}/>
            </div>
        </div>
    )
};

Room.contextTypes = {
    name: PropTypes.string,
    seats: PropTypes.string,
}
export default Room