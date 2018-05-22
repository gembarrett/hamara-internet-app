import { StyleSheet } from 'react-native';

const submenuStyles = StyleSheet.create({
  button: {
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    paddingLeft: 40,
    paddingBottom: 4,
    fontSize: 11,
    color: '#fff'
  },
  base: {
    width:'100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 20,
  }
});

export { submenuStyles };
