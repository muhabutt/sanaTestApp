//import liraries
import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/styles';
import FadeInView from '../components/FadeInView';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/Button';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.flex1, styles.whiteBackground, styles.pt20]}>
      <StatusBar showHideTransition={'fade'} translucent={false} />
      <Text style={[styles.heading, styles.greenColor, styles.selfAlignCenter]}>
        Sana Test App
      </Text>
      <FadeInView
        style={[
          styles.flex1,
          styles.justifyContentCenter,
          styles.whiteBackground,
        ]}>
        <View
          style={[
            styles.flex1,
            styles.justifyContentCenter,
            styles.alignItemCenter,
            styles.whiteBackground,
          ]}>
          <Button
            action={() => navigation.navigate('StoryMain')}
            labelStyle={[
              styles.btnText,
              styles.font20,
              styles.whiteColor,
              styles.p10,
            ]}
            label={'Read Stories'}
          />
        </View>
      </FadeInView>
    </SafeAreaView>
  );
};

export default Home;
