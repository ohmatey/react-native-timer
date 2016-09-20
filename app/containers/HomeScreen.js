import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import TimerCard from '../components/TimerCard.js';
import * as actions from '../actions/actions';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';

import TimerMixin from 'react-timer-mixin';

const HomeScreen = React.createClass({
    mixins: [TimerMixin],
    getInitialState: function() {
        return {
            scrolling: false
        };
    },

    render(){
        const {
            timers
        } = this.props;

        const {
            scrolling
        } = this.state;

        return (
            <View style={styles.container}>
                <LinearGradient colors={this.props.gradientColors} style={styles.linearGradient}>
                    <ScrollView
                        ref={(scrollView) => { _scrollView = scrollView; }}
                        automaticallyAdjustContentInsets={false}
                        scrollEventThrottle={200}
                        horizontal={true}
                        centerContent={true}
                        pagingEnabled={true}
                        style={styles.horizontalScrollView}>
                        {timers.map((timer, i) => (
                            <TimerCard key={i} name={timer.alarmName} duration={timer.selectedDuration} />
                        ))}
                    </ScrollView>
                </LinearGradient>
            </View>
        )
    }
})

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        height
    },
    text: {
        backgroundColor: "transparent"
    },
    horizontalScrollView: {
        position: "absolute",
        bottom: 0,
        width,
        height,
        padding: 10
    },
    linearGradient: {
        flex: 1,
        height,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapStateToProps = (state, props) => {
    return {
        ...state,
        gradientColors: ['#4ce880', '#6459ff'],
    };
}

const mapDispatchToProps = (dispatch) => ({
    decrimentTimer(duration){
        dispatch(actions.decrimentTimer());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)
