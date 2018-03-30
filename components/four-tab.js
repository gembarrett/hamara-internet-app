import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, ScrollView } from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicText from './sub/basicText.js';
import CustomTabBar from './sub/customTabBar.js'
import IconTabBar from './sub/iconTabBar.js'
import { globals } from '../styles/globals.js';
import { prefs } from '../routes/prefs.js';

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
    ];
    let tabsArray = [];
    let numOfTabs = props.tab4 ? 3 : 2;
    for (let i=0; i<=numOfTabs; i++) {
      tabsArray.push(
        <ScrollView tabLabel={tabInfo[i].label} key={i}>
            {tabInfo[i].type === "text" ?
              <BasicText isParagraph>{tabInfo[i].content}</BasicText> :
              <View>{tabInfo[i].content}</View>
            }
        </ScrollView>
      )
    }
    if (prefs.language === "pk") {
      return tabsArray.reverse();
    } else {
      return tabsArray;
    }
  }


  render() {
    let numOfTabs = this.props.tab4 ? 3 : 2;
    return (
      <ScrollableTabView style={[globals.green, globals.base]} initialPage={prefs.language === 'pk' ? numOfTabs : 0}
        renderTabBar={() =>
          <IconTabBar backgroundColor={this.props.backgroundColor} />} >
          {this.getTabs(this.props)}
      </ScrollableTabView>
    );
  }
};
