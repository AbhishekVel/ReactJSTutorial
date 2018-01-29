import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyBVSfGtia29-z0bMA9byUSoEe5i31auVpM',
    authDomain: 'manager-d2d04.firebaseapp.com',
    databaseURL: 'https://manager-d2d04.firebaseio.com',
    projectId: 'manager-d2d04',
    storageBucket: 'manager-d2d04.appspot.com',
    messagingSenderId: '272458900080'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
