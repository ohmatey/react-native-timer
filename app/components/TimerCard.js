import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
  TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const TimerCard = ({
    selectedDuration,
    alarmName,
    countDown,
    description
}) => (
    <View style={styles.container}>
        <Text style={styles.timerTitleText}>{alarmName}</Text>

        <View style={styles.card}>
            <Text>{description}</Text>
            <View style={styles.buttonGroup}>
                <TouchableHighlight style={styles.buttons} underlayColor={"#2bd1aa"} onPress={() => Actions.countDown({
                    alarmName,
                    countDown,
                    selectedDuration
                })}>
                    <Text style={styles.text}>RUN {selectedDuration}</Text>
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
        backgroundColor: "transparent",
        color: "white",
    },
    buttonText: {
        fontWeight: "500",
    },
    buttonGroup: {
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        flexDirection: "row",
    },
    buttons: {
        backgroundColor: "#2DDCB5",
        margin: 20,
        borderRadius: 20,
        borderColor: "transparent",
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
