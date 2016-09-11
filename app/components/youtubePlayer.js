import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import YouTube from 'react-native-youtube';

var YoutubePlayer = React.createClass({
  getInitialState: function () {
    return {
      isReady: false,
      status: null,
      quality: null,
      error: null,
      isPlaying: true
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
      <YouTube
        ref="youtubePlayer"
        videoId="KVZ-P-ZI6W4"
        play={true}
        hidden={false}
        playsInline={true}
        loop={false}

        onReady={(e)=>{this.setState({isReady: true})}}
        onChangeState={(e)=>{this.setState({status: e.state})}}
        onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
        onError={(e)=>{this.setState({error: e.error})}}
        onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}

        style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
        />

        <TouchableOpacity onPress={()=>{this.setState((s) => {return {isPlaying: !s.isPlaying};} )}}>
          <Text style={[styles.welcome, {color: 'blue'}]}>{true == 'playing' ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default YoutubePlayer;
