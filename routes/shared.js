import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Linking } from 'react-native';
import BasicText from '../components/sub/basicText.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { prefs } from '../routes/prefs.js';
import { StackNavigator } from 'react-navigation';
import {globals} from '../styles/globals.js'

function buttons(array) {
  var buttonsListArr = [];
  let text = '';
  for (let i = 0; i < array.length; i++){
    text = translatedText(array, i);
    const route = array[i].route;
    buttonsListArr.push(
      <View key = {array[i].id ? array[i].id : i}>
        <Button
          title={text}
          onPress={() => this.props.navigation.navigate(array[i].route)} />
      </View>
    )
  }
  return buttonsListArr;
};

// TODO: combine these next two functions
function translatedText(array, i) {
  const text = prefs.language === 'pk' && array[i].textPK ? array[i].textPK : array[i].textEN;
  return text;
};
function translatedTitle(array, i) {
  const title = prefs.language === 'pk' && array[i].titlePK ? array[i].titlePK : array[i].titleEN;
  return title;
};

function printLinks(array) {
  var linksListArr = [];
  for (let i = 0; i < array.length; i++){
    linksListArr.push(
      <View key={i}>
        <BasicText style={globals.whiteText} onPress={() => Linking.openURL(array[i].url)}>
          {translatedText(array, i)}
       </BasicText>
     </View>
    )
  }
  return linksListArr;
};

function printGoals(array) {
  var iconsArr = [];
  for (let i = 0; i < array.length; i++){
    iconsArr.push(
      <View key={i}>
        <Icon name={array[i].icon} size={15} color="#ffffff" backgroundColor="#000000"/>
        <BasicText isParagraph style={globals.whiteText}>{translatedTitle(array, i)}</BasicText>
        <BasicText isParagraph style={globals.whiteText}>{translatedText(array, i)}</BasicText>
      </View>
    )
  }
  return iconsArr;
};

function updateHeader(text) {
    this.props.navigation.setParams({title: text});
}

export {buttons, translatedText, translatedTitle, printLinks, printGoals, updateHeader};
