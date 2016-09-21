import React from 'react';
import {
    AlertIOS,
    Vibration
} from 'react-native';
import { connect } from 'react-redux'

import CountDown from '../components/CountDown.js';
import * as actions from '../actions/actions';

import { Actions } from 'react-native-router-flux';

class CountDownContainer extends React.Component {
  render() {
    return <CountDown {...this.props} />
  }
}

const mapStateToProps = (state, {
    alarmName,
    duration
}) => {
    return {
        name: alarmName,
        duration,
        addTimeAmount: 30,
        gradientColors: ['#4ce880', '#6459ff'],
    };
}

const mapDispatchToProps = (dispatch) => ({
    decrimentTimer(duration){
        dispatch(actions.decrimentTimer());
    },
    finishTimer(){
        dispatch(actions.finishTimer());
    },
    startTimer(selectedDuration){
        dispatch(actions.startTimer({selectedDuration}));
    },
    pauseTimer(time){
        dispatch(actions.pauseTimer(time));
    },
    addTime(amount){
        dispatch(actions.addTime(amount));
    },
    timerFinished(startTimerFn, time){
        Vibration.vibrate();
        AlertIOS.alert(
            'Alarm Finished',
            '',
            [
                {text: 'Repeat', onPress: () => {
                    startTimerFn(time);
                    this.startTimer(time);
                }},
                {text: 'Set Another', onPress: () => Actions.createCountDownTimer()},
                {text: 'Add 30 secs', onPress: () => {
                    startTimerFn(time + 30);
                    this.startTimer(time + 30);
                }},
                {text: 'Done'},
            ]
        );
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CountDownContainer)
