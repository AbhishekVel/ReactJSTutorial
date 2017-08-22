// import a library to help create a Component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a Component
const App = () => (
   // style expands the content to take up the entire width/height of screen
   // allows for scrolling
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


// render it to the device
AppRegistry.registerComponent('project', () => App);
