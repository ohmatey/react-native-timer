import * as types from '../constants/index.js'
import timer from './timer.js';
import history from './history.js'

const initialState = [
    {
        date: new Date(),
    }
]

export default function countDown(state = initialState, action) {
    const {
        alarmName,
        duration,
        type
    } = action;

    switch (type) {
        case types.ADDHISTORY:
            return state;
            break;
        default:
            return state
        }
}

const getTimer = (state, name) => {
    return state.map(timer => {
        if(timer.name === name) return timer;
    })
}
