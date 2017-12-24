import { StyleSheet } from 'react-native';

const splashStyles = StyleSheet.create({
  base: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    width:'80%',
    alignSelf: 'flex-end',
    flexBasis: 250,
  },
  button: {
    width:'50%',
    // alignSelf: 'flex-end'
  },
  buttons: {
    flexDirection: 'row',
    flexBasis: 'auto',
    paddingBottom: 50,
    paddingTop: 20
  },
  logo: {
    width:'50%',
    flexBasis: 220,
    marginTop: 50
  }
})

export { splashStyles };
