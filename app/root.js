import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'

import App from './containers/App.js'

const store = configureStore()

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root
