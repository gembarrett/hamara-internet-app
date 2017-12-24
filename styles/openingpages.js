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
  button: {
    marginLeft: 200,
    // alignSelf: 'flex-end'
  },
  buttons: {
    flexDirection: 'row',
    flexBasis: 'auto',
    paddingBottom: 50,
    paddingTop: 15
  },
  logo: {
    width:'50%',
    flexBasis: 220,
    marginTop: 50
  }
});

const menuStyles = StyleSheet.create({
  button: {
    width: '100%'
  },
  base: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    width: '100%'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
    justifyContent: 'center'
  },
  logo: {
    height: 50,
    width: 50
  }
});

export { splashStyles, menuStyles };
