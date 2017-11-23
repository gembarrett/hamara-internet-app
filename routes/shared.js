import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Linking } from 'react-native';
import { prefs } from '../routes/prefs.js';

function buttons(array) {
  var buttonsListArr = [];
  const text = translatedText;
  for (let i = 0; i < array.length; i++){
    const route = array[i].route;
    buttonsListArr.push(
      <View key = {array[i].id}>
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
        <Text key={i} onPress={() => Linking.openURL(array[i].url)}>
          {translatedText(array, i)}
           </Text>
    )
  }
  return linksListArr;
};

export {buttons, translatedText, translatedTitle, printLinks};
