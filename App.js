import React from 'react';
import { 
StyleSheet, 
Text, 
View, 
TouchableOpacity
 } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {AppDrawerNavigator} from './components/AppDrawerNavigator';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {
  render(){
  return (
    
      <AppContainer />
  );
}
}

const switchNavigator = createSwitchNavigator ({
  WelcomeScreen : {screen : WelcomeScreen},
  Drawer : {screen : AppDrawerNavigator}
})

const AppContainer = createAppContainer (switchNavigator)

const styles = StyleSheet.create({
});
