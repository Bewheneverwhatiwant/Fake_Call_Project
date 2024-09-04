import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import SubScreen from './SubScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ title: '메인 화면' }} />
        <Stack.Screen name="Sub" component={SubScreen} options={{ title: '서브 화면' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
