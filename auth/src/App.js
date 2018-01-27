import React, { Component } from 'react';;
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

class App extends Component {
  // a life cycle method which is invoked in the beggining
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAnwlfQYP6JxX39dVx_2T9bp1zRvkWo7fE",
      authDomain: "auth-d3bc4.firebaseapp.com",
      databaseURL: "https://auth-d3bc4.firebaseio.com",
      projectId: "auth-d3bc4",
      storageBucket: "auth-d3bc4.appspot.com",
      messagingSenderId: "824020897029"
    });
  }
  
  render() {
      <View>
      return (
        <Header headerText = 'Authentication' />
        <Text> An application </Text>
      </View>
    );
  }
}

export default App;
