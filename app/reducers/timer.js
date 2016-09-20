import * as types from '../constants/index.js'
import history from './history.js'

const initialState = {
    selectedDuration: 0,
    alarmName: "",
    countDown: 0,
    completed: false,
    paused: false,
}

export default function timer(state = initialState, action) {
    const {
        selectedDuration,
        alarmName,
        countDown,
        completed,
        paused,
        addTime,
        type
    } = action;

    switch (type) {
        case types.STARTTIMER:
            return Object.assign({}, state, {
                alarmName,
                selectedDuration,
                countDown: selectedDuration,
                history: history(getTimer(state, alarmName), {
                    type: types.ADDHISTORY
                })
            })
            break;
        case types.FINISHTIMER:
            return Object.assign({}, state, {
                countDown: 0,
                completed: true,
                paused: false
            })
            break;
        case types.PAUSETIMER:
            return Object.assign({}, state, {
                countDown,
                paused: !state.paused
            })
            break;
        case types.RESETTIMER:
            return Object.assign({}, state, {
                countingDown: true,
                selectedDuration,
                paused
            })
            break;
        case types.DECRIMENTTIMER:
            return Object.assign({}, state, {
                countDown: countDown - 1
            })
            break;
        case types.ADDTIME:
            return Object.assign({}, state, {
                countDown: state.countDown + addTime,
                paused: false,
                completed: false
            })
            break;
        default:
            return state
        }
}
