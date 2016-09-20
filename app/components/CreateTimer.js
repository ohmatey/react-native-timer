import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  PickerIOS,
  Dimensions
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const PickerItemIOS = PickerIOS.Item;

class CreateTimer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    renderPickerItems(){
        var items = [];
        for (var i=1; i < 59; i++) {
            items.push(
                <PickerItemIOS
                  key={i}
                  value={i}
                  label={`${i}`}
                />
            );
        }
        return items;
    }

    render() {
        return (
            <View>
                <LinearGradient colors={this.props.gradientColors} style={styles.linearGradient}>
                    <Text style={styles.text}>Set New Alarm</Text>
                    <TextInput
                        style={{
                            height: 40,
                            textAlign: 'center'
                        }}
                        placeholder="Alarm Name"
                        value={this.state.alarmName}
                        onChangeText={(alarmName) => this.setState({alarmName})}
                    />
                        <PickerIOS
                            selectedValue={this.state.selectedDuration}
                            itemStyle={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', width: 100}}
                            onValueChange={(selectedDuration) => this.setState({selectedDuration})}>
                            {this.renderPickerItems()}
                        </PickerIOS>
                    <TouchableHighlight style={styles.buttons} onPress={() => this.props.startTimer({
                        alarmName: this.state.alarmName,
                        selectedDuration: this.state.selectedDuration,
                        countDown: this.state.selectedDuration
                    })}>
                        <Text style={styles.text}>Submit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttons} onPress={() => this.props.backButton()}>
                        <Text style={styles.text}>Back</Text>
                    </TouchableHighlight>
                </LinearGradient>
            </View>
        );
    }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    buttons: {
        padding: 5,
        width: width - 50,
        alignItems: "center",
        borderColor: "white",
        borderWidth: 2
    },
    text: {
        color: "white",
        backgroundColor: "transparent",
        fontWeight: "bold"
    },
    linearGradient: {
        flex: 1,
        height,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CreateTimer;
