import { StyleSheet } from 'react-native';

const splashStyles = StyleSheet.create({
  base: {
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  image: {
    width:'80%',
  },
  button: {
    width:'50%',
    alignSelf: 'flex-end'
  },
  logo: {
    width:'50%',
    alignSelf: 'center'
  }
})

export { splashStyles };
