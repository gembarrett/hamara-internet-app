import { StyleSheet } from 'react-native';

const globals = StyleSheet.create({
  green: {
    backgroundColor: '#7DC242',
  },
  orange: {
    backgroundColor: '#F69731',
  },
  red: {
    backgroundColor: '#ED1651',
  },
  yellow: {
    backgroundColor: '#E6D228',
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
  icon: {
    opacity: 0.75,
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
  },
  screenBg: {
    width:'100%',
    flexBasis: 500
  },
  para: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  notPara: {
    paddingHorizontal: 5,
    paddingVertical: 2
  },
  linkButton: {
    fontFamily: 'NotoSans-Bold',
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  linkView: {
    marginHorizontal: 20,
    marginVertical:10,
    borderRadius: 40,
    minHeight: 50,
    justifyContent:  'center',
    alignItems: 'center'
  }
})

export { globals };
