import * as React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import styles from '../styles/styles';
import StoryMain from '../screens/StoryMain';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <View style={[styles.flex1, styles.whiteBackground]}>
      <Stack.Navigator
        initialRouteName="Home"
        mode={'modal'}
        headerMode={'float'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StoryMain"
          component={StoryMain}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Routes;
