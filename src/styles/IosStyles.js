/**
 * Styles specifically for IOS
 */
import {StyleSheet} from 'react-native';

export const base = StyleSheet.create({
  heading: {
    fontSize: 24,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Lora-Semi-Bold',
  },
  paragraph: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Lora-Regular',
  },
  btnText: {
    fontSize: 20,
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
