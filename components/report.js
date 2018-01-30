import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Accordion from '@ercpereda/react-native-accordion';
import { reportTo } from '../content/report.js';
import { prefs } from '../routes/prefs.js';
import { translatedTitle, translatedText } from '../routes/shared.js';
import { globals } from '../styles/globals.js';

export default class ReportScreen extends React.Component {
  static navigationOptions = {
    title: translatedTitle(reportTo, 0)
  };
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
            backgroundColor: '#f9f9f9',
          }}>
            <Text>{`${isOpen ? '-' : '+'} ${title}`}</Text>
          </View>;
      const text = translatedText(reportTo, i);
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
      <View style={[styles.container, globals.base, globals.green]}>
        {this.accordion}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    width: '100%'
  }
});
