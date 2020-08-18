import {Platform, StyleSheet, Dimensions} from 'react-native';
let {height} = Dimensions.get('window');
import {androidStyles} from './androidStyles';
import {iosStyles} from './iosStyles';

// common styles
export const base = StyleSheet.create({
  selfAlignCenter: {
    alignSelf: 'center',
  },
  flexDirectionColumn : {
    flexDirection: 'column',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentStart: {
    justifyContent: 'flex-start',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  alignItemStart: {
    alignItems: 'flex-start',
  },
  alignItemEnd: {
    alignItems: 'flex-end',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  borderRadius10: {
    borderRadius: 10,
  },
  borderRadius20: {
    borderRadius: 20,
  },
  circleButton: {
    borderRadius: 50,
    width: 35,
    height: 35,
    borderWidth: 2,
  },
  borderWhite: {
    borderColor: '#fff',
    borderWidth: 2,
  },
  floatRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  floatLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  fadeOut: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'transparent',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  opacity1: {
    opacity: 1,
  },
});
export const utilities = StyleSheet.create({
  mlM10: {
    marginLeft: -10,
  },
  mlM20: {
    marginLeft: -20,
  },
  mRM10: {
    marginRight: -10,
  },
  mRM20: {
    marginRight: -20,
  },
  m10: {
    margin: height * 0.01,
  },
  m20: {
    margin: height * 0.02,
  },
  p10: {
    padding: height * 0.01,
  },
  p20: {
    padding: height * 0.02,
  },
  mt10: {
    marginTop: height * 0.01,
  },
  mt20: {
    marginTop: height * 0.02,
  },
  mb10: {
    marginBottom: height * 0.01,
  },
  mb20: {
    marginBottom: height * 0.02,
  },
  ml10: {
    marginLeft: height * 0.01,
  },
  ml20: {
    marginLeft: height * 0.02,
  },
  mR10: {
    marginRight: height * 0.01,
  },
  mR20: {
    marginRight: height * 0.02,
  },
  pt10: {
    paddingTop: height * 0.01,
  },
  pt20: {
    paddingTop: height * 0.2,
  },
  pb10: {
    paddingBottom: height * 0.01,
  },
  pb20: {
    paddingBottom: height * 0.02,
  },
  pl10: {
    paddingLeft: height * 0.01,
  },
  pl20: {
    paddingLeft: height * 0.02,
  },
  pr10: {
    paddingRight: height * 0.01,
  },
  pr20: {
    paddingRight: height * 0.02,
  },
});
export const fontFamily = StyleSheet.create({
  LoraBold: {
    fontFamily: 'Lora-Bold',
  },
  LoraBoldItalic: {
    fontFamily: 'Lora-Bold-Italic',
  },
  LoraItalic: {
    fontFamily: 'Lora-Italic',
  },
  LoraMedium: {
    fontFamily: 'Lora-Medium',
  },
  LoraMediumItalic: {
    fontFamily: 'Lora-Medium-Italic',
  },
  LoraRegular: {
    fontFamily: 'Lora-Regular',
  },
  LoraSemiBold: {
    fontFamily: 'Lora-Semi-Bold',
  },
  LoraSemiBoldItalic: {
    fontFamily: 'Lora-Semi-Bold-Italic',
  },
});
export const colors = StyleSheet.create({
  whiteBackground: {
    backgroundColor: '#ffffff',
  },
  greenBackground: {
    backgroundColor: '#14646A',
  },
  lightGreenBackground: {
    backgroundColor: '#75B2B7',
  },
  lightGreenColor: {
    color: '#75B2B7',
  },
  greenColor: {
    color: '#14646A',
  },
  whiteColor: {
    color: '#ffffff',
  },
});
export const grid = StyleSheet.create({
  col1: {
    flex: 0.25,
  },
  col2: {
    flex: 0.5,
  },
  col3: {
    flex: 0.75,
  },
  col4: {
    flex: 1,
  },
  flex1: {
    flex: 1.1,
  },
  flex2: {
    flex: 2.1,
  },
  flex3: {
    flex: 3.1,
  },
  w100: {
    width: '100%',
  },
  w25: {
    width: '25%',
  },
  w50: {
    width: '50%',
  },
  w75: {
    width: '75%',
  },
});

const platform = Platform.OS === 'ios' ? 'ios' : 'android';
let platformIndependentStyles = null;

if (platform === 'ios') {
  platformIndependentStyles = iosStyles;
}
if (platform === 'android') {
  platformIndependentStyles = androidStyles;
}
export const styles = {
  ...base,
  ...utilities,
  ...fontFamily,
  ...colors,
  ...grid,
  ...platformIndependentStyles,
};

export default styles;
