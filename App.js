import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const onSingleTap = () => {
    alert('You tapped the screen!');
    console.log("Hello there, JB!")
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <View>
        <TouchableOpacity onPress={onSingleTap}>
          <Text style={{ color: '#fff', fontSize: 20 }}>Tap Me!</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}
