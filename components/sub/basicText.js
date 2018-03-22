import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { globals } from '../../styles/globals.js';
import { prefs } from '../../routes/prefs.js';

export default class BasicText extends React.Component {
  render() {
    const { isParagraph} = this.props;
    return (
      <Text style={[prefs.language === 'pk' ? globals.pkFont : globals.enFont, this.props.isParagraph ? globals.para : globals.notPara, globals.whiteText, this.props.style]}>
        { this.props.children }
      </Text>
    );
  }
};

BasicText.propTypes = {
  isParagraph: PropTypes.bool
};
