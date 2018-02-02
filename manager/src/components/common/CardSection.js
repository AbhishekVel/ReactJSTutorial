import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  // style prop can take an array, and the right styles will override the left styles
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );


const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
