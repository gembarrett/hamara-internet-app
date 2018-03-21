import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import MenuText from './menuText.js';
import { globals } from '../../styles/globals.js';
import { menuStyles } from '../../styles/menus.js'
import PREFS from '../../routes/prefs.js';

export default class CustomTab extends React.Component {
  render() {
		const { text, onPress} = this.props;
    return (
      <TouchableOpacity onPress={() => onPress()}>
        <ImageBackground
          source={require('../../assets/splash-button.png')}
          resizeMode="contain"
          style={{  }}>
            <MenuText style={{ fontSize: 14 }}>{text}</MenuText>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
};

CustomTab.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
