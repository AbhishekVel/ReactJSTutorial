import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null }
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

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
