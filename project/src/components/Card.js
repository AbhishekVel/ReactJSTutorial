import React from 'react';
import { View } from 'react-native';

// standalone component, only usefulness is its styling
const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {
        // props.children contains everything inside its open and close tags
        props.children
      }
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2, // rounded corners
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    // no shadow on left/right side, but on the top/bottom
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, // darkness (.1 will lighten up the color a little)
    shadowRadius: 2, // round the corners
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
};


export default Card;
