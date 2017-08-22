import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
const { buttonStyle, textStyle } = styles;
const { onPress } = props;

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={buttonStyle}
    >
      <Text style={textStyle}>Click me !! </Text>
    </TouchableOpacity>
  );
};


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600', // bold text
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1, // button will expand to fit as much content as possible
    alignSelf: 'stretch', //stech to fill limits of container
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    elevation: 3,
  }
};

export default Button;
