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
    countdown,
    selectedDuration
}, props) => ({
    countdown,
    selectedDuration,
    gradientColors: ['#4ce880', '#6459ff']
})

const mapDispatchToProps = (dispatch) => ({
    startTimer(timer){
        dispatch(actions.startTimer({...timer}));

        // go to countDown page
        Actions.countDown()
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTimerContainer)
