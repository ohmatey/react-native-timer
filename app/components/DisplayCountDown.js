import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//import YoutubePlayer from './youtubePlayer.js';

const DisplayCountDown = React.createClass({
    render(){
        const {
            alarmName,
            time
        } = this.props;

        return (
            <View style={styles.container}>


                <Text style={styles.text}>{alarmName}</Text>
                <Text style={styles.text}>{time}s</Text>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 5,

    },
    text: {
        backgroundColor: "transparent"
    },
});

export default DisplayCountDown;
