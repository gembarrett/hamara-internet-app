import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { globals } from '../styles/globals.js';

export default class FourTab extends React.Component {
  render() {
    return (
      <ScrollableTabView tabBarActiveTextColor="#fff" tabBarInactiveTextColor="#eee" style={[globals.green, globals.base]} initialPage={0} renderTabBar={() => <DefaultTabBar />} >
        <Text style={globals.whiteText} tabLabel='Problem'>{this.props.tab1}</Text>
        <Text style={globals.whiteText} tabLabel='Solution'>{this.props.tab2}</Text>
        <Text style={globals.whiteText} tabLabel='Tips'>{this.props.tab3}</Text>
        <Text style={globals.whiteText} tabLabel='Resources'>{this.props.tab4}</Text>
      </ScrollableTabView>
    );
  }
};
