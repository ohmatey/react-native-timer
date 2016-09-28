import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import LinearGradient from 'react-native-linear-gradient';

import DisplayCountDown from './DisplayCountDown.js';

const CountDown = React.createClass({
    mixins: [TimerMixin],
    componentDidMount: function() {
        this.startTimer(this.props.selectedDuration);
    },

    getInitialState: function() {
        return {
            countDown: this.props.selectedDuration,
            completed: false,
            paused: this.props.paused,
            selectedDuration: this.props.selectedDuration
        };
    },

    checkTimer(time){
        if(time <= 0){
            this.props.timerFinished(this.startTimer, this.props.selectedDuration);
            this.clearTimer();

            this.setState({
                countDown: 0,
                completed: true
            });

            return false;
        }

        return true
    },

    componentWillUnmount(){
        this.clearTimer();
    },

    startTimer(time){
        this.setState({
            countDown: time
        })

        if(this.checkTimer(time)){
            this.setState({
                countDown: time,
                completed: false,
                paused: false,
            })

            this.timer = this.setInterval(() => {
                if(!this.state.paused){
                    this.props.decrimentTimer();
                    this.setState({countDown: this.state.countDown - 1})
                    this.checkTimer(this.state.countDown);
                }
            }, 1000)
        }
    },

    clearTimer(){
        this.clearInterval(this.timer);
        this.setState({
            paused: false,
            countDown: 0,
            completed: true
        });
    },

    pauseTimer(countDown){
        this.setState({paused: !this.state.paused});
        this.props.pauseTimer({countDown});
    },

    finishTimer(){
        this.props.finishTimer();
        this.clearInterval(this.timer);
        this.setState({
            paused: false,
            countDown: 0,
            completed: true
        });
    },

    render(){
        const {
            addTime,
            addTimeAmount,
            alarmName,
        } = this.props;

        const {
            countDown,
            completed,
            selectedDuration,
            paused
        } = this.state;

        return(
            <LinearGradient colors={this.props.gradientColors} style={styles.linearGradient}>
                <View style={styles.card}>
                    <DisplayCountDown {...this.props} selectedDuration={selectedDuration} time={countDown} />

                    <View style={styles.buttonGroup}>
                        <TouchableHighlight
                            style={[styles.button, styles.rightButton]}
                            onPress={() => {
                                this.clearTimer();
                                this.startTimer(selectedDuration)
                            }}>
                            <Text style={styles.text}>Repeat</Text>
                        </TouchableHighlight>
                        {completed ?
                            <TouchableHighlight
                                style={[styles.button, styles.leftButton]}
                                onPress={() => this.startTimer(selectedDuration)}>
                                <Text style={styles.text}>Start</Text>
                            </TouchableHighlight>
                            :
                            <TouchableHighlight
                                style={[styles.button, styles.leftButton]}
                                onPress={() => this.pauseTimer({countDown})}>
                                <Text style={styles.text}>{paused ? "Unpause" : "Pause"}</Text>
                            </TouchableHighlight>
                        }
                    </View>
                </View>
                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    scrollEventThrottle={200}
                    horizontal={true}
                    style={styles.horizontalScrollView}>
                    <TouchableHighlight style={styles.bottomButtons} onPress={() => this.finishTimer()}>
                        <Text style={styles.text}>Finish</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.bottomButtons} onPress={() => {
                            addTime({time: addTimeAmount});
                            this.setState({
                                countDown: this.state.countDown + addTimeAmount,
                                selectedDuration: this.state.countDown + addTimeAmount
                            })
                        }}>
                        <Text style={styles.text}>Add {addTimeAmount} secs</Text>
                    </TouchableHighlight>
                </ScrollView>
            </LinearGradient>
        )
    }
});

const {height, width} = Dimensions.get('window');

const borderRadius = 10;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius,
        width: width - 50,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 4,
            width: 0
        }
    },
    horizontalScrollView: {
        backgroundColor: "#21262D",
        position: "absolute",
        bottom: 0,
        width,
        padding: 10
    },
    buttonGroup: {
        flexDirection: "row",
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        position: "absolute",
        bottom: 0,
    },
    button: {
        alignSelf: "stretch",
        backgroundColor: "#EF4380",
        padding: 5,
        flex: 1,
        alignItems: "center"
    },
    bottomButtons: {
        width: 70,
        height: 70,
        borderRadius: 70,
        marginLeft: 10,
        backgroundColor: "#3F454E",
        alignItems: "center",
        justifyContent:'center'
    },
    leftButton: {
        borderBottomRightRadius: borderRadius,
    },
    rightButton: {
        borderBottomLeftRadius: borderRadius,
    },
    text: {
        opacity: .8,
        padding: 10,
        color: "white",
        fontSize: 14,
        backgroundColor: "transparent",
        textAlign: "center",
    },
    linearGradient: {
        flex: 1,
        height,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CountDown;
