import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class FourTab extends React.Component {
  render() {
    return (
      <ScrollableTabView style={{marginTop: 20}} initialPage={0} renderTabBar={() => <DefaultTabBar />} >
        <Text tabLabel='Problem'>{this.props.tab1}</Text>
        <Text tabLabel='Solution'>{this.props.tab2}</Text>
        <Text tabLabel='Tips'>{this.props.tab3}</Text>
        <Text tabLabel='Resources'>{this.props.tab4}</Text>
      </ScrollableTabView>
    );
  }
};
