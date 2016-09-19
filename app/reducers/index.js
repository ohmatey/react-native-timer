import {combineReducers} from 'redux'
import countDown from './countDown.js'
import navigator from './navigator.js'
import timers from './timers.js'

const rootReducer = combineReducers({
  countDown,
  timers
})

export default rootReducer
