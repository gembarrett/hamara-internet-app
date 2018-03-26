import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, ImageBackground } from 'react-native';
import MenuText from './menuText.js';
import { globals } from '../../styles/globals.js';
import { menuStyles } from '../../styles/menus.js'
import PREFS from '../../routes/prefs.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CustomTab extends React.Component {
  render() {
		const { text, onPress, icon} = this.props;
    return (
      <TouchableOpacity onPress={() => onPress()}>
        <Text>{icon}</Text>
        <MenuText style={{ fontSize: 16, paddingVertical: 10 }}>{text}</MenuText>
      </TouchableOpacity>
    );
  }
};

CustomTab.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.any.isRequired
};
