import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, StatusBar } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
//import Orientation from 'react-native-orientation';

import CreateTimerContainer from '../containers/CreateTimerContainer.js';
import CountDownContainer from '../containers/CountDownContainer.js';

import Icon, {
    Button
} from 'react-native-vector-icons/Octicons';

const RouterWithRedux = connect()(Router);

class App extends React.Component {
  componentDidMount() {
      //Orientation.lockToPortrait();
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
                renderBackButton={(nav) => {
                    return nav.navigationState.index ? (
                        <Button name="arrow-left" backgroundColor="transparent" onPress={Actions.pop} />
                    ) : null;
                }}>
              <Scene key="root">
                <Scene key="creatCountDownTimer" component={CreateTimerContainer} title="Create Timer" initial={true} />
                <Scene key="countDown" component={CountDownContainer} title="Timer"/>
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
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomColor: 'transparent'
  },
  navTitle: {
    color: 'white',
  }
})

export default App;
