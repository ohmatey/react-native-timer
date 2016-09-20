import * as types from '../constants/index.js'
import timer from './timer.js';
import history from './history.js'

const initialState = [
    {
        selectedDuration: 5,
        alarmName: "test timer",
        countDown: 5,
        completed: false,
        paused: false,
    },
    {
        selectedDuration: 10,
        alarmName: "test timer 2",
        countDown: 10,
        completed: false,
        paused: false,
    }
];

export default function countDown(state = initialState, action) {
    const {
        alarmName,
        duration,
        type
    } = action;

    switch (type) {
        case types.CREATETIMER:
            return [
                ...state,
                timer(undefined, action)
            ]
            break;
        case types.DELETETIMER:
            return getTimer(alarmName);
        case types.UPDATETIMER:
            return getTimer(alarmName);
        case types.GETTIMER:
            return state.map(timer => {
                if(timer.name === action.alarmName) return timer;
            })
        case types.STARTTIMER:
            return [
                ...state,
                timer(getTimer(state, alarmName), action)
            ];
        case types.FINISHTIMER:
            return [
                ...state,
                timer(getTimer(state, alarmName), action)
            ];
        case types.PAUSETIMER:
            return [
                ...state,
                timer(getTimer(state, alarmName), action)
            ];
        case types.RESETTIMER:
            return [
                ...state,
                timer(getTimer(state, alarmName), action)
            ];
        case types.DECRIMENTTIMER:
            return state.map((t) => {
                if(t.name === action.name){
                    return timer(t, action);
                }
                return timer;
            })
        case types.ADDTIME:
            return [
                ...state,
                timer(getTimer(state, alarmName), action)
            ];
        default:
            return state
        }
}

const getTimer = (state, name) => {
    return state.map(timer => {
        if(timer.name === name) return timer;
    })
}
