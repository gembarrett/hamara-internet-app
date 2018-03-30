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

  getTabs(props) {
    tabInfo = [
      {
        label: 'exclamation',
        type: 'text',
        content: props.tab1
      },
      {
        label: 'lightbulb-o',
        type: 'text',
        content: props.tab2
      },
      {
        label: 'list-ul',
        type: 'view',
        content: props.tab3
      },
      {
        label: 'book',
        type: 'view',
        content: props.tab4
      }
    ]
    let tabsArray = [];
    for (let i=0; i<props.length; i++) {
      tabsArray.push(
        <ScrollView tabLabel={tabInfo[i].label}>
          {tabInfo[i].type === 'text' ? <BasicText isParagraph>{tabInfo[i].content}</BasicText> : <View>{tabInfo[i].content}</View>}
        </ScrollView>
      )
    }
    return tabsArray;
  }


  render() {

    return (
      <ScrollableTabView style={[globals.green, globals.base]} initialPage={0}
        renderTabBar={() =>
          <IconTabBar backgroundColor={this.props.backgroundColor} />} >
          {this.getTabs(this.props)}
      </ScrollableTabView>
    );
  }
};
