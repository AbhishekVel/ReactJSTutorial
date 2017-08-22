import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row', // makes the flex rules rules apply horizontally
    justifyContent: 'flex-start', // push all items to start edge of container
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
