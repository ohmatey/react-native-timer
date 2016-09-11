import * as types from '../constants/index.js'

const initialState = {
    selectedDuration: 0,
    alarmName: "",
    countDown: 0,
    completed: false,
    paused: false,
}

export default function countDown(state = initialState, action) {
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
        //console.log(action)
        case types.STARTTIMER:
            return Object.assign({}, state, {
                alarmName,
                selectedDuration,
                countDown: selectedDuration
            })
        case types.FINISHTIMER:
            return Object.assign({}, state, {
                countDown: 0,
                completed: true,
                paused: false
            })
        case types.PAUSETIMER:
            return Object.assign({}, state, {
                countDown,
                paused: !state.paused
            })
        case types.RESETTIMER:
            return Object.assign({}, state, {
                countingDown: true,
                selectedDuration,
                paused
            })
        case types.DECRIMENTTIMER:
            return Object.assign({}, state, {
                countDown: countDown - 1
            })
        case types.ADDTIME:
            return Object.assign({}, state, {
                countDown: state.countDown + addTime,
                paused: false,
                completed: false
            })
        default:
            return state
        }
}
