//import libraries
import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import PropTypes from 'prop-types';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  const {styles} = props;

  return (
    <Animated.View // Special animatable View
      style={
        styles
          ? styles
          : {
              opacity: fadeAnim, // Bind opacity to animated value
            }
      }>
      {props.children}
    </Animated.View>
  );
};

FadeInView.propTypes = {
  styles: PropTypes.array,
};

export default FadeInView;
