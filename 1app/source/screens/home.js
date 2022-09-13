import * as React from 'react';
import { Button, View, Text } from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune'
const participants = [
  '%10',
  '%20',
  '%30',
  '%40',
  '%50',
  '%60',
  '%70',
  '%90',
  'FREE',
];
const wheelOptions = {
      rewards: participants,
      knobSize: 50,
      borderWidth: 5,
      borderColor: '#000',
      innerRadius: 50,
      duration: 4000,
      backgroundColor: 'transparent',
      textAngle: 'horizontal',
      knobSource: require('./assets/images/knoob.png'),
      getWinner: (value, index) => {
        this.setState({winnerValue: value, winnerIndex: index});
      },
      onRef: ref => (this.child = ref),
    };

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title=" Details"
        onPress={() => navigation.navigate('Details')}/>
      <Button title="About" onPress={()=>navigation.navigate('About')}/>
      <Button title="Settings" onPress={()=>navigation.navigate('Settings')}/>
      <WheelOfFortune
    wheelOptions={wheelOptions}
/>
   
    </View>
    
    
  );
  
}

export default HomeScreen;

