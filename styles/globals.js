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
  credit: {
    fontSize: 12,
    marginLeft: 14,
    marginBottom: 10
  },
  icon: {
    opacity: 0.75,
  },
  pkFont: {
    // fontFamily: 'NotoNastaliqUrdu-Regular',
    alignSelf: 'flex-end',
    fontFamily: 'NotoSans-Regular',
    fontSize: 14,
  },
  enFont: {
    fontFamily: 'NotoSans-Regular',
  },
  bold: {
    fontFamily: 'NotoSans-Bold',
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
  linkIcon: {
    paddingBottom: 12,
    color: '#fff',
    alignSelf: 'flex-end',
  },
  linkButton: {
    fontFamily: 'NotoSans-Bold',
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontSize:12,
    width: 220,
    textAlignVertical: 'center',
    alignSelf: 'center'
  },
  linkView: {
    marginHorizontal: 20,
    marginVertical:10,
    borderRadius: 40,
    flexDirection: 'row',
    minHeight: 40,
    justifyContent:  'center',
    alignContent: 'center',
    elevation: 3
  },
  inlandLink: {
    color: '#fff',
    backgroundColor: 'rgb(41,149,220)',
    fontFamily: 'NotoSans-Bold',
  },
  listItemContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'stretch',
  },
  listIcon: {
    alignSelf: 'flex-start',
    color: '#F69731',
    borderTopColor: '#F69731',
    borderTopWidth: 2,
    backgroundColor: '#fff',
    width: '100%',
    flexShrink: 1,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  listItem: {
    paddingVertical: 10,
    flexGrow: 5,
  },
  lineBreak: {
    paddingBottom: 20,
    borderBottomColor: '#F69731',
    borderBottomWidth: 1,
  },
  shortBreak: {
    width: '100%',
    backgroundColor: '#F69731',
  }
})

export { globals };
