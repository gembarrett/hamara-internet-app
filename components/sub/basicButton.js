import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import MenuText from './menuText.js';
import { globals } from '../../styles/globals.js';
import PREFS from '../../routes/prefs.js';

export default class BasicButton extends React.Component {
  render() {
		const { text, onPress} = this.props;
    return (
      <View style={{width: 120}}>
        <TouchableOpacity onPress={() => onPress()}>
          <ImageBackground
            source={require('../../assets/splash-button.png')}
            resizeMode="contain"
            style={{ paddingVertical: 10, paddingHorizontal: 20, marginHorizontal: 8 }}>
              <MenuText style={{textAlign: 'center', fontSize: 14, fontFamily: 'NotoSans-Bold' }}>{text.toUpperCase()}</MenuText>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
};

BasicButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
