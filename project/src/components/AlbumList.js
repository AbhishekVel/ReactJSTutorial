// take both react library and component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// uses class based so you have  access to lifecycle events
// can therefore fetch data and other useful things
class AlbumList extends Component {
  // side note: state is component provided
  // concept : state is an integral part of React
  //           whenever state is updated, render is called again
  state = { albums: [] };

  // will be executed whenever this component is about to be rendered
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // only update state using setState
      .then(res => this.setState({ albums: res.data }));
  }

  renderAlbums() {
    // map returns a new array with each spot being the returned value
    // of that individual map
    return this.state.albums.map(album =>
      // key property (should be unique) is used to
      //make updating states and rendering efficient
      <AlbumDetail key={album.title} albumData={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }

}

export default AlbumList;
