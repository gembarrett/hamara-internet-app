import { StyleSheet } from 'react-native';

const splashStyles = StyleSheet.create({
  base: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    width:'80%',
    alignSelf: 'flex-end',
    flexBasis: 250,
  },
  buttons: {
    flexDirection: 'row'
  },
  logo: {
    width:'50%',
    flexBasis: 220,
    marginTop: 50
  }
});

export { splashStyles };
