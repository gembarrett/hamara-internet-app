import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicText from './sub/basicText.js';
import CustomTabBar from './sub/customTabBar.js'
import { globals } from '../styles/globals.js';

export default class FourTab extends React.Component {
  render() {
    const iconArr = ["exclamation", "lightbulb-o", "list-ul", "book"];

    return (
      <ScrollableTabView style={[globals.green, globals.base]} initialPage={0}
        renderTabBar={() =>
          <CustomTabBar backgroundColor={this.props.backgroundColor} />} >
            <View tabIcon="exclamation" tabLabel='Problem'>
              <BasicText isParagraph>{this.props.tab1}</BasicText>
            </View>
            <View tabIcon="lightbulb-o" tabLabel='Solution'>
              <BasicText BasicText isParagraph>{this.props.tab2}</BasicText>
            </View>
            <View tabIcon="list-ul" tabLabel='Tips'>
              <BasicText isParagraph>{this.props.tab3}</BasicText>
            </View>
            {this.props.tab4 ? <View tabIcon="book" tabLabel='Resources'>
              {this.props.tab4}
            </View> : null}
      </ScrollableTabView>
    );
  }
};
