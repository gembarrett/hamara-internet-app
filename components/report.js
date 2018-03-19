import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Linking } from 'react-native';
import BasicText from './sub/basicText.js';
import Accordion from '@ercpereda/react-native-accordion';
import { reportTo } from '../content/report.js';
import { globals } from '../styles/globals.js';
import { prefs } from '../routes/prefs.js';
import { translatedTitle, translatedText } from '../routes/shared.js';

export default class ReportScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(reportTo, 0)
  };
  // TODO: refactor this
  buttons(array) {
    var buttonsArr = [];
    if (array.button1) {
      if (array.button1.startsWith('htt')) {
        buttonsArr.push(<Button key='url1' title={'Make a report'} onPress={() => Linking.openURL(array.button1)}></Button>)
      } else {
        buttonsArr.push(<Button key='tel1' title={'Call ' + array.button1} onPress={() => Linking.openURL('tel:'+array.button1)}></Button>)
      }
    }
    if (array.button2) {
      if (array.button2.startsWith('htt')) {
        buttonsArr.push(<Button style={globals.twoButtons} key='url2' title={'Make a report'} onPress={() => Linking.openURL(array.button2)}></Button>)
      } else {
        buttonsArr.push(<Button style={globals.twoButtons} key='tel2' title={'Call ' + array.button2} onPress={() => Linking.openURL('tel:'+array.button2)}></Button>)
      }
    }
    return buttonsArr;
  }
  get accordion() {
    var accordionArr = [];
    for (let i = 1; i < reportTo.length; i++){
      const title = translatedTitle(reportTo, i);
      const Header = ({ isOpen }) =>
        <View style={{
            paddingTop: 15,
            paddingRight: 15,
            paddingLeft: 15,
            paddingBottom: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#a9a9a9',
            backgroundColor: '#ED1651'
          }}>
            <BasicText style={{color: 'white'}}>{`${isOpen ? '>' : '^'} ${title}`}</BasicText>
          </View>;
      const text = translatedText(reportTo, i);
      const buttons = this.buttons(reportTo[i]);
      const Content = (
        <View style={{
            display: 'flex',
            backgroundColor: '#31363D'
          }}>
            <BasicText style={{
              paddingTop: 15,
              paddingRight: 15,
              paddingBottom: 15,
              paddingLeft: 15,
              color: '#fff',
            }}>
              {text}
            </BasicText>
            {buttons}
          </View>);
      accordionArr.push(
          <Accordion key={i}
            header={Header}
            content={Content}
            duration={300}
          />
      )
    }
    return accordionArr;
  }

  render() {
    return (
      <ScrollView contentContainerStyle={[globals.base, globals.green]}>
          {this.accordion}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%'
  }
});
