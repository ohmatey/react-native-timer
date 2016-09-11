import {combineReducers} from 'redux'
import countDown from './countDown.js'
import navigator from './navigator.js'

const rootReducer = combineReducers({
  countDown
})

export default rootReducer
