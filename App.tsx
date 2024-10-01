import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './pages/MainScreen';
import SubScreen from './pages/SubScreen';
import GetAFakeCall from './pages/get_a_fake_call';
import AnswerTheFakeCall from './pages/answer_the_fake_call';
import HangUpFakeCall from './pages/hangup_fake_call';
import mainSetting from './pages/mainSetting';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Sub" component={SubScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="GetAFakeCall" component={GetAFakeCall} options={{ headerShown: false }}  />
        <Stack.Screen name="AnswerTheFakeCall" component={AnswerTheFakeCall} options={{ headerShown: false }}  />
        <Stack.Screen name="HangUpFakeCall" component={HangUpFakeCall} options={{ headerShown: false }}  />
        <Stack.Screen name="mainSetting" component={mainSetting} options={{ headerShown: false }}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
