import { StyleSheet } from 'react-native';
import { prefs } from '../routes/prefs.js';

const menuStyles = StyleSheet.create({
  text: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 2,
    fontSize: 11,
    fontFamily: 'NotoSans-Bold',
    color: '#fff',
    textAlign: 'center'
  },
  base: {
    width:'75%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
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
