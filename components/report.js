import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Linking } from 'react-native';
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
        buttonsArr.push(<Button title={'More info at ' + array.button1} onPress={() => Linking.openURL(array.button1)}></Button>)
      } else {
        buttonsArr.push(<Button title={'call ' + array.button1} onPress={() => Linking.openURL(array.button1)}></Button>)        
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
            <Text style={{color: 'white'}}>{`${isOpen ? '>' : '^'} ${title}`}</Text>
          </View>;
      const text = translatedText(reportTo, i);
      const buttons = this.buttons(reportTo[i]);
      const Content = (
        <View style={{
            display: 'flex',
            backgroundColor: '#31363D'
          }}>
            <Text style={{
              paddingTop: 15,
              paddingRight: 15,
              paddingBottom: 15,
              paddingLeft: 15,
              color: '#fff',
            }}>
              {text}
            </Text>
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
      <ScrollView style={[globals.base, globals.green]}>
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
