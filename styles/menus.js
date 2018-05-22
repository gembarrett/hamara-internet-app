import { StyleSheet } from 'react-native';
import { prefs } from '../routes/prefs.js';

const menuStyles = StyleSheet.create({
  text: {
    paddingLeft: 45,
    paddingRight: 45,
    paddingBottom: 2,
    fontSize: 14,
    fontFamily: 'NotoSans-Bold',
    color: '#fff',
  },
  base: {
    width:'100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  button: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
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
