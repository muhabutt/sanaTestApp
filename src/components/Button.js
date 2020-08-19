//import libraries
import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import styles from '../styles/Styles';

// create a component
const Button = ({label, action, buttonStyle, labelStyle}) => {
  const defaultBtnStyle = [
    styles.lightGreenBackground,
    {
      borderRadius: 15,
    },
    styles.borderWhite,
    styles.ml20,
    styles.mR20,
    styles.p20,
    styles.justifyContentCenter,
    styles.alignItemCenter,
  ];
  return (
    <TouchableOpacity
      style={buttonStyle ? buttonStyle : defaultBtnStyle}
      onPress={action}>
      <Text
        adjustsFontSizeToFit
        style={labelStyle ? labelStyle : styles.btnText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.array,
  buttonStyle: PropTypes.array,
  action: PropTypes.func,
};

//make this component available to the app
export default Button;
