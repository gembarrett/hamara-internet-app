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
  text: {
    textAlign: 'center',
    paddingLeft: 40,
    fontSize: 10,
    color: '#fff'
  },
  container: {
    flex:1,
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  logo: {
    height: 50
  }
});

export { splashStyles, menuStyles };