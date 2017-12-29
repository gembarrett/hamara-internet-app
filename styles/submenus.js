import { StyleSheet } from 'react-native';

const submenuStyles = StyleSheet.create({
  button: {
    flexBasis:45,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    paddingLeft: 40,
    fontSize: 10,
    color: '#fff'
  },
  base: {
    width:'75%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginVertical: 20
  }
});

export { submenuStyles };
