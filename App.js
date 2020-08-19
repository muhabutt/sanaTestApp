//import libraries
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/Routes';
import SplashScreen from 'react-native-splash-screen';

// Using react navigation
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;
