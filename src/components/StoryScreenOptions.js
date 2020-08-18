import React from 'react';
import styles from '../styles/styles';
import IosBackButton from './ios/IosBackButton';
import AndroidBackButton from './android/AndroidBackButton';
import {Platform, View, ImageBackground, Alert} from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';

// create a component
const StoryScreenOptions = ({css, position}) => {
  //Check if platform is ios or android
  const platform = Platform.OS === 'ios' ? 'ios' : 'android';
  const image = require('../../assets/images/banner.png');
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
              {
                height: '10%',
              },
            ]
      }>
      {position === 'header' ? (
        platform === 'ios' ? (
          <React.Fragment>
            <ImageBackground source={image} style={styles.bannerImage}>
              <IosBackButton />
            </ImageBackground>
          </React.Fragment>
        ) : (
          <ImageBackground source={image} style={styles.bannerImage}>
            <AndroidBackButton />
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
                  [{text: 'OK', onPress: () => console.log('OK Pressed')}],
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
};

export default StoryScreenOptions;
