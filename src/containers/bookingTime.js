import {connect} from 'react-redux'
import {book} from '../actions'
import Day from '../components/Day'
import moment from 'moment'

const getHours = (state, room, day) => {
    let Hours = [];
    let time = moment(state.switchTime).add(day, 'Days').startOf('Day').add(8, 'hours');
    for (let i = 0; i < 10; i++) {
        let hour = time.add(1, 'hours');
        let id = hour.format('x') + '_'+room;
        let booked = false;
        state.booking.map(hour => {
            if (hour.id === id) {
                return booked = true;
            }
        })
        Hours.push({booked: booked, time: hour.format('HH:mm'), id: id})
    }

        return Hours
}


const mapDispatchToProps = {
    bookTime: book
}

const mapStateToProps = (state, ownProps) => ({
    hours: getHours(state, ownProps.room, ownProps.day),
    start: moment(state.switchTime)
});

const BookingTime = connect(mapStateToProps, mapDispatchToProps)(Day)
export default BookingTime
