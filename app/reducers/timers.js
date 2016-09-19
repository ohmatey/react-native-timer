import * as types from '../constants/index.js'

const initialState = {
    timers: [
        {
            name: "test timer",
            duration: 10
        },
        {
            name: "test timer",
            duration: 10
        }
    ]
}

export default function countDown(state = initialState, action) {
    const {
        alarmName,
        duration,
        type
    } = action;

    switch (type) {
        //console.log(action)
        case types.CREATETIMER:
            return Object.assign({}, state, {
                alarmName,
                duration
            })
        case types.DELETETIMER:
            return Object.assign({}, state, {
                countDown: 0,
                completed: true,
                paused: false
            })
        case types.UPDATETIMER:
            return Object.assign({}, state, {
                countDown,
                paused: !state.paused
            })
        default:
            return state
        }
}
