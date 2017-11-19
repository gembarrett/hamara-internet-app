import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MenuScreen from './components/menu';

const SplashScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button onPress={() => navigation.navigate('Menu')} title="Go to details" />
  </View>
);


const App = StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerTitle: 'Splash',
    },
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      headerTitle: 'Menu',
    },
  },
});

export default App;
