import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Accordion from '@ercpereda/react-native-accordion';
import { reportTo } from '../content/report.js';
import { prefs } from '../routes/prefs.js';

export default class ReportScreen extends React.Component {
  get accordion() {
    var accordionArr = [];
    for (let i = 0; i < reportTo.length; i++){
      const title = prefs.language === 'pk' && reportTo[i].titlePK ? reportTo[i].titlePK : reportTo[i].titleEN;
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
      const content = prefs.language === 'pk' && reportTo[i].textPK ? reportTo[i].textPK : reportTo[i].textEN;
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
              {content}
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
      <View style={styles.container}>
        {this.accordion}
      </View>
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
