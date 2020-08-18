/**
 * Styles specifically for Android
 */
import {StyleSheet, Dimensions} from 'react-native';
let {width} = Dimensions.get('window');

export const base = StyleSheet.create({
  heading: {
    fontSize: width * 0.06,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Lora-Bold',
  },
  paragraph: {
    fontSize: width * 0.05,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontFamily: 'Lora-Regular',
  },
  btnText: {
    fontSize: width * 0.05,
    fontFamily: 'Lora-Bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  bannerImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
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

export const androidStyles = {
  ...base,
  ...font,
};
