import * as types from '../constants/index';

////////////////////////////////////
//            TIMER
///////////////////////////////////


export function startTimer(timer) {
    return {
        type: types.STARTTIMER,
        ...timer
    };
}

export function finishTimer(timer) {
    return {
        type: types.FINISHTIMER,
        ...timer
    };
}

export function pauseTimer(timer) {
    return {
        type: types.PAUSETIMER,
        ...timer
    };
}

export function resetTimer(timer) {
    return {
        type: types.PAUSETIMER,
        ...timer
    };
}

export function decrimentTimer() {
    return {
        type: types.DECRIMENTTIMER
    };
}

export function restartTimer(time) {
    return {
        type: types.RESTARTTIMER,
        ...time
    };
}

export function addTime(time) {
    return {
        type: types.ADDTIME,
        ...time
    };
}




////////////////////////////////////
//            TIMERS
///////////////////////////////////

export function createTimer(timer) {
    return {
        type: types.CREATETIMER,
        ...timer
    };
}

export function getTimer(alarmName) {
    return {
        type: types.GETTIMER,
        alarmName
    };
}
