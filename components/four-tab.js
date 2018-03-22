import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasicText from './sub/basicText.js';
import CustomTabBar from './sub/customTabBar.js'
import { globals } from '../styles/globals.js';

export default class FourTab extends React.Component {
  render() {
    return (
      <ScrollableTabView style={[globals.green, globals.base]} initialPage={0}
        renderTabBar={() =>
          <CustomTabBar backgroundColor={this.props.backgroundColor} />} >
            <View tabLabel='Problem'>
              <Icon name='exclamation' color='#fff' size={50} style={globals.icon} />
              <BasicText isParagraph>{this.props.tab1}</BasicText>
            </View>
            <View tabLabel='Solution'>
              <Icon name='lightbulb-o' color='#fff' size={50} style={globals.icon} />
              <BasicText BasicText isParagraph>{this.props.tab2}</BasicText>
            </View>
            <View tabLabel='Tips'>
              <Icon name='list-ul' color='#fff' size={50} style={globals.icon} />
              <BasicText isParagraph>{this.props.tab3}</BasicText>
            </View>
            {this.props.tab4 ? <View tabLabel='Resources'>
              <Icon name='book' color='#fff' size={50} style={globals.icon} />
              {this.props.tab4}
            </View> : null}
      </ScrollableTabView>
    );
  }
};
