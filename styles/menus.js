import { StyleSheet } from 'react-native';
import { prefs } from '../routes/prefs.js';

const menuStyles = StyleSheet.create({
  text: {
    paddingLeft: prefs.language === 'en' ? 40 : 0,
    paddingRight: prefs.language === 'pk' ? 40 : 0,
    paddingBottom: 4,
    fontSize: 11,
    fontFamily: 'NotoSans-Bold',
    color: '#fff',
    textAlign: prefs.language === 'pk' ? 'right' : 'left'
  },
  base: {
    width:'75%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginVertical: 20
  },
  button: {
    flexBasis:45,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20
  },
  logo: {
    flexBasis: 50
  }
});

export { menuStyles };
