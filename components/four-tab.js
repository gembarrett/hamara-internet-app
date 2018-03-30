import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, ScrollView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicText from './sub/basicText.js';
import CustomTabBar from './sub/customTabBar.js'
import IconTabBar from './sub/iconTabBar.js'
import { globals } from '../styles/globals.js';

export default class FourTab extends React.Component {
  backgroundImage(section) {
    if (section === "online") {
      return `source=${require('../assets/online-icon.png')}`;
    } else {
      return `source=${require('../assets/identity-icon.png')}`;
    }
  }
  render() {
    return (
      <ScrollableTabView style={[globals.green, globals.base]} initialPage={0}
        renderTabBar={() =>
          <IconTabBar backgroundColor={this.props.backgroundColor} />} >
            <View tabLabel='exclamation'>
              <BasicText isParagraph>{this.props.tab1}</BasicText>
            </View>
            <View tabLabel='lightbulb-o'>
              <BasicText isParagraph>{this.props.tab2}</BasicText>
            </View>
            <View tabLabel='list-ul'>
              <View>{this.props.tab3}</View>
            </View>
            {this.props.tab4 ? <View tabLabel='book'>
              {this.props.tab4}
            </View> : null}
      </ScrollableTabView>
    );
  }
};
