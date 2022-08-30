import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title=" Details"
        onPress={() => navigation.navigate('Details')}/>
      <Button title="About" onPress={()=>navigation.navigate('About')}/>
      <Button title="Settings" onPress={()=>navigation.navigate('Settings')}/>
    </View>
    
  );
  
}

export default HomeScreen;

