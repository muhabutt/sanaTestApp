import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StoryMain from '../screens/storyScreenComponents/StoryMain';
import Home from '../screens/homeScreenComponents/Home';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StoryMain" component={StoryMain} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default Routes;
