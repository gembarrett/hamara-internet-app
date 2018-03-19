import { StyleSheet } from 'react-native';

const globals = StyleSheet.create({
  green: {
    backgroundColor: '#7DC242',
  },
  orange: {
    backgroundColor: '#F69731',
  },
  base: {
    flex: 1
  },
  whiteText: {
    color: '#fff'
  },
  textStyle: {
    fontSize: 18,
  },
  pkFont: {
    // fontFamily: 'NotoNastaliqUrdu-Regular',
    fontFamily: 'NotoSans-Regular',
    direction: 'rtl',
  },
  enFont: {
    fontFamily: 'NotoSans-Regular',
    direction: 'ltr'
  },
  menuButtons: {
    alignItems: 'center'
  },
  tabStyles: {
    backgroundColor: '#7DC242'
  },
  twoButtons: {
    flex: 2
  }
})

export { globals };
