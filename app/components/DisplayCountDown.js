import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

const DisplayCountDown = React.createClass({
    render(){
        const {
            selectedDuration,
            alarmName,
            time
        } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.alarmNameText}>{alarmName}</Text>
                <AnimatedCircularProgress
                    size={120}
                    width={5}
                    fill={time / selectedDuration * 100}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875">
                    {
                        () => (
                            <View style={styles.circleTextContainer}>
                                <Text style={[styles.text, styles.circleText]}>{time}</Text>
                            </View>
                        )
                    }
                </AnimatedCircularProgress>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        padding: 100,
    },
    alarmNameText: {
        backgroundColor: "transparent",
        marginBottom: 50
    },
    circleTextContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems:'center',
        justifyContent:'center'
    },
    circleText: {
        fontWeight: 'bold',
        backgroundColor: "transparent"
    }
});

export default DisplayCountDown;
