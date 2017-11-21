import { prefs } from '../routes/prefs.js';

get buttons(array) {
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

get translatedText(array) {
  const text = prefs.language === 'pk' && array[i].textPK ? array[i].textPK : array[i].textEN;
  return text;
};

export {buttons, translatedText};
