import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const TimerCard = ({
    duration,
    name,
    description
}) => (
    <View style={styles.container}>
        <Text style={styles.timerTitleText}>{name}</Text>

        <View style={styles.card}>
            <Text>{description}</Text>

            <View style={styles.buttonGroup}>
                <TouchableHighlight style={styles.buttons} onPress={() => Actions.countDown({name})}>
                    <Text style={styles.text}>Run</Text>
                </TouchableHighlight>
            </View>
        </View>
    </View>
)

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        margin: 40,
        marginTop: 100,
        width: width - 100,
        height: height - 200,
    },
    timerTitleText: {
        fontWeight: "500",
        alignSelf: "center",
        marginBottom: 50,
        backgroundColor: "transparent"
    },
    text: {
        backgroundColor: "transparent"
    },
    buttonText: {
        fontWeight: "500"
    },
    buttonGroup: {
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        flexDirection: "row",
    },
    buttons: {
        backgroundColor: "transparent",
        borderColor: "white",
        borderWidth: 2,
        alignSelf: "stretch",
        alignItems: "center",
        flex: 1,
        padding: 10,
    },
    card: {
        height: 400,
        alignItems: "center",
        shadowColor: "#000000",
        backgroundColor: "white",
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 4,
            width: 0
        }
    }
});

export default TimerCard
