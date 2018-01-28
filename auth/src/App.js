import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: false }
  // a life cycle method which is invoked in the beggining
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAnwlfQYP6JxX39dVx_2T9bp1zRvkWo7fE',
      authDomain: 'auth-d3bc4.firebaseapp.com',
      databaseURL: 'https://auth-d3bc4.firebaseio.com',
      projectId: 'auth-d3bc4',
      storageBucket: 'auth-d3bc4.appspot.com',
      messagingSenderId: '824020897029'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
