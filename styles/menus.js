import { StyleSheet } from 'react-native';
import { prefs } from '../routes/prefs.js';

const menuStyles = StyleSheet.create({
  text: {
    paddingLeft: 45,
    paddingRight: 45,
    paddingBottom: 2,
    fontSize: 12,
    fontFamily: 'NotoSans-Bold',
    color: '#fff',
  },
  base: {
    width:'80%',
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
    justifyContent: 'space-between',
  },
  logo: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    width:80,
    height: 40
  },
  logoTouch: {
    width: 'auto',
    height: 'auto',
  }
});

export { menuStyles };
