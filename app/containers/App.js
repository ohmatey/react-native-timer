import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar } from 'react-native';
import { Router, Scene, Actions, ActionConst, Modal } from 'react-native-router-flux';
import { connect } from 'react-redux';
//import Orientation from 'react-native-orientation';

import CreateTimerContainer from '../containers/CreateTimerContainer.js';
import CountDownContainer from '../containers/CountDownContainer.js';
import HomeScreen from '../containers/HomeScreen.js';

import Icon, {
    Button
} from 'react-native-vector-icons/Octicons';

const RouterWithRedux = connect()(Router);

class App extends React.Component {
    renderBackButton(nav){
        let backButton;

        switch (nav.name) {
            case 'home':
                backButton = <Button name="plus" backgroundColor="transparent" onPress={() => Actions.creatCountDownTimer()} />
                break;
            case 'countDown':
                backButton = <Button name="arrow-left" backgroundColor="transparent" onPress={Actions.home} />
                break
            default:
                backButton = <Button name="arrow-left" backgroundColor="transparent" onPress={Actions.pop} />
            }

      return backButton;
  }

  render() {
    return (
        <View>
            <StatusBar
                backgroundColor="black"
                barStyle="light-content"
            />
            <RouterWithRedux
                navigationBarStyle={styles.navBar}
                titleStyle={styles.navTitle}
                renderRightButton={(nav) => {
                    return <Button name="settings" backgroundColor="transparent" onPress={Actions.navigation} />
                }}
                renderBackButton={this.renderBackButton}>

                    <Scene key="createCountDownModal" duration={3} direction="vertical" component={Modal}>
                        <Scene key="root">
                            <Scene key="home" component={HomeScreen} title="Home" initial={true} />
                            <Scene key="countDown" component={CountDownContainer} title="Timer"/>
                        </Scene>
                        <Scene key="creatCountDownTimer" component={CreateTimerContainer} title="Create Timer" />
                    </Scene>

            </RouterWithRedux>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.1)',
    borderWidth: 0,
    borderBottomColor: 'transparent'
  },
  navTitle: {
    color: 'white',
  }
})

export default App;
