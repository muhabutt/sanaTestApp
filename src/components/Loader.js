//import libraries
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from '../styles/Styles';

// create a component
const Loader = () => {
  return (
    <View
      style={[
        styles.flex1,
        styles.justifyContentCenter,
        styles.alignItemCenter,
        styles.whiteBackground,
        styles.opacity1,
      ]}>
      <ActivityIndicator size={'large'} color="#75B2B7" />
    </View>
  );
};

//make this component available to the app
export default Loader;
