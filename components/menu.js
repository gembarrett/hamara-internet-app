import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import OnlineScreen from './online';
import DevicesScreen from './devices.js';
import IdentityScreen from './identity.js';
import CommsScreen from './comms.js';
import SpaceScreen from './space.js';
import ReportScreen from './report.js';
import DidYouKnowScreen from './didyouknow.js';
import HelplineScreen from './helpline.js';
import AboutScreen from './about.js';
import SupportScreen from './support.js';
import lvl1Nav from '../routes/lvl1.js';

const lvl1 = [
  {
    id: 1,
    text: 'Protecting yourself online'
  },
  {
    id: 2,
    text: 'Protecting your devices'
  },
  {
    id: 3,
    text: 'Protecting your identity'
  },
  {
    id: 4,
    text: 'Protecting your communications'
  },
  {
    id: 5,
    text: 'Protecting your space'
  },
  {
    id: 6,
    text: 'How to make a report'
  },
  {
    id: 7,
    text: 'Did you know'
  },
  {
    id: 8,
    text: 'Cyber harassment helpline'
  },
  {
    id: 9,
    text: 'About this app'
  },
  {
    id: 10,
    text:'I need support'
  }
];

get buttons() {
  var buttonsListArr = [];
  for (let i = 0; i < lvl1.length; i++){
    buttonsListArr.push(
      <View key = {lvl1[i].id}>
        <Button
          title={lvl1[i].text}
          onPress={() => navigate('Menu')}>
            {lvl1[i].text}
        </Button>
      </View>
    )
  };
};


const MenuScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {buttons.buttonsListArr}
  </View>
);


// export default class MenuScreen extends React.Component {
//   render() {
//     var buttonsListArr = [];
//     for (let i = 0; i < lvl1.length; i++){
//       buttonsListArr.push(
//         <View key = {lvl1[i].id}>
//           <Button
//             title={lvl1[i].text}
//             onPress={() => navigate('Menu')}>
//               {lvl1[i].text}
//           </Button>
//         </View>
//       )
//     }
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Menu Screen</Text>
//         {buttonsListArr}
//       </View>
//     );
//   }
// }
