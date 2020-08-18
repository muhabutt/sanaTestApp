/**
 * Styles specifically for IOS
 */
import {StyleSheet, Dimensions} from 'react-native';
let {width} = Dimensions.get('window');

export const base = StyleSheet.create({
  heading: {
    fontSize: width * 0.05,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Lora-Semi-Bold',
  },
  paragraph: {
    fontSize: width * 0.05,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Lora-Regular',
  },
  btnText: {
    fontSize: width * 0.03,
    fontFamily: 'Lora-Regular',
    color: '#fff',
    textAlign: 'center',
  },
});
export const font = StyleSheet.create({
  font10: {
    fontSize: 10,
  },
  font20: {
    fontSize: 20,
  },
});

export const iosStyles = {
  ...base,
  ...font,
};
