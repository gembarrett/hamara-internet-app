import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollableTabView style={{marginTop: 20}} initialPage={0} renderTabBar={() => <DefaultTabBar />} >
        <Text tabLabel='Problem'>My</Text>
        <Text tabLabel='Solution'>favorite</Text>
        <Text tabLabel='Tips'>project</Text>
        <Text tabLabel='Resources'>favorite</Text>
      </ScrollableTabView>
    );
  }
};
