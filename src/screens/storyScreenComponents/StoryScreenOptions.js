import React from 'react';
import styles from '../../styles/Styles';
import IosBackButton from '../../components/ios/IosBackButton';
import AndroidBackButton from '../../components/android/AndroidBackButton';
import {Platform, View, ImageBackground, Alert, Text} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../components/Button';

// create a component
const StoryScreenOptions = ({css, position, title}) => {
  //Check if platform is ios or android
  const platform = Platform.OS === 'ios' ? 'ios' : 'android';
  //Header banner image
  const image = require('../../../assets/images/banner.png');

  // custom styles for the header section of option screen
  const storyOptionsHeaderCustomStyles = {
    height: '20%',
  };

  return (
    <View
      style={
        css
          ? css
          : [
              styles.w100,
              styles.greenBackground,
              styles.justifyContentStart,
              styles.alignItemCenter,
              styles.flexDirectionRow,
              storyOptionsHeaderCustomStyles,
            ]
      }>
      {position === 'header' ? (
        platform === 'ios' ? (
          <React.Fragment>
            <ImageBackground source={image} style={styles.bannerImage}>
              <View
                style={[styles.flexDirectionRow, styles.justifyContentStart]}>
                {/*back button for the bar*/}
                <View style={[styles.floatLeft]}>
                  <IosBackButton />
                </View>
                {/*title for the bar*/}
                {title ? (
                  <View style={[styles.flex2]}>
                    <Text style={[styles.heading, styles.whiteColor]}>
                      {title}
                    </Text>
                  </View>
                ) : (
                  <React.Fragment />
                )}
              </View>
            </ImageBackground>
          </React.Fragment>
        ) : (
          <ImageBackground source={image} style={styles.bannerImage}>
            <View style={[styles.flexDirectionRow, styles.justifyContentStart]}>
              {/*back button for the bar*/}
              <View style={[styles.floatLeft]}>
                <AndroidBackButton />
              </View>
              {/*title for the bar*/}
              {title ? (
                <View style={[styles.flex2]}>
                  <Text style={[styles.heading, styles.whiteColor]}>
                    {title}
                  </Text>
                </View>
              ) : (
                <React.Fragment />
              )}
            </View>
          </ImageBackground>
        )
      ) : (
        <React.Fragment>
          <View style={[styles.col2]}>
            <Button
              label={'Text style'}
              action={() => {
                Alert.alert(
                  'Text style options',
                  'Button is clicked',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  {cancelable: false},
                );
              }}
            />
          </View>
          <View style={[styles.col2]}>
            <Button
              label={'Reset'}
              action={() => {
                Alert.alert(
                  'Reset options',
                  'Button reset clicked',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  {cancelable: false},
                );
              }}
            />
          </View>
        </React.Fragment>
      )}
    </View>
  );
};

StoryScreenOptions.propTypes = {
  css: PropTypes.array,
  position: PropTypes.string,
  title: PropTypes.string,
};

export default StoryScreenOptions;
