import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Accordion from '@ercpereda/react-native-accordion';
import { reportTo } from '../content/report.js';
import { prefs } from '../routes/prefs.js';

const Header = ({ isOpen }) =>
  for (let i = 0; i < reportTo.length; i++) {
    title = prefs.language === 'pk' ? reportTo[i].titlePK : reportTo[i].titleEN;
  };
  <View style={{
      paddingTop: 15,
      paddingRight: 15,
      paddingLeft: 15,
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#a9a9a9',
      backgroundColor: '#f9f9f9',
    }}>
      <Text>{`${isOpen ? '-' : '+'} Click to Expand`}</Text>
    </View>;

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
        This content is hidden in the accordion
      </Text>
    </View>);

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });


export default class ReportScreen extends React.Component {
    get headers({ isOpen }) =>
    <View style={{
        paddingTop: 15,
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#a9a9a9',
        backgroundColor: '#f9f9f9',
      }}>
        <Text>{`${isOpen ? '-' : '+'} Click to Expand`}</Text>
      </View>;

    render() {
      return (
        <View style={styles.container}>
          <Accordion
            header={Header}
            content={Content}
            duration={300}
          />
        </View>
      );
    }


};
