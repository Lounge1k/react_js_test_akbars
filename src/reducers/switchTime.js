import moment from 'moment'

const initialState = +moment().startOf('isoweek').format('x');

const switchTime = (state = initialState , action) => {
    switch (action.type) {
        case 'SWITCH_MONTH':
            return action.month
        default:
            return state
    }
}

export default switchTime
