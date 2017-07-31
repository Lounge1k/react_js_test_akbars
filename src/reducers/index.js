import { combineReducers } from 'redux'
import switchTime from './switchTime'
import booking from './booking'

const todoApp = combineReducers({
    switchTime,
    booking
})

export default todoApp
