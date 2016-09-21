import React from 'react';
import {connect} from 'react-redux'

import CreateTimer from '../components/CreateTimer.js';
import * as actions from '../actions/actions';

import { Actions } from 'react-native-router-flux';

class CreateTimerContainer extends React.Component {
  render() {
    return <CreateTimer {...this.props} />
  }
}

const mapStateToProps = ({
    selectedDuration
}, props) => ({
    selectedDuration,
    gradientColors: ['#4ce880', '#6459ff']
})

const mapDispatchToProps = (dispatch) => ({
    startTimer(timer){
        console.log(timer)
        dispatch(actions.createTimer({...timer}));
        // go to countDown page
        Actions.countDown({
            name: timer.alarmName,
            duration: timer.selectedDuration
        })
    },
    backButton(){
        Actions.home();
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTimerContainer)
