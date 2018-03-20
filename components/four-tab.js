import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import BasicText from './sub/basicText.js';
import CustomTabBar from './sub/customTabBar.js'
import { globals } from '../styles/globals.js';

export default class FourTab extends React.Component {
  render() {
    return (
      <ScrollableTabView style={[globals.green, globals.base]} initialPage={0} renderTabBar={() => <CustomTabBar />} >
        <BasicText tabLabel='Problem'>{this.props.tab1}</BasicText>
        <BasicText tabLabel='Solution'>{this.props.tab2}</BasicText>
        <BasicText tabLabel='Tips'>{this.props.tab3}</BasicText>
        {this.props.tab4 ? <BasicText tabLabel='Resources'>{this.props.tab4}</BasicText> : null}
      </ScrollableTabView>
    );
  }
};
