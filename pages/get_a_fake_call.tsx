import React from 'react';
import { View, Text, SafeAreaView, useColorScheme } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import CustomButton from '../components/basic/CustomButton';
import CustomRow from '../components/basic/CustomRow';
import CustomColumn from '../components/basic/CustomColumn';
import CustomFont from '../components/basic/CustomFont';

const Background = styled(SafeAreaView)<{ isDarkMode: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? Colors.darker : Colors.lighter};
`;

const ScreenText = styled.Text<{ isDarkMode: boolean }>`
  font-size: 24px;
  color: ${({ isDarkMode }) => (isDarkMode ? Colors.white : Colors.black)};
`;

function GetAFakeCall({ navigation }: { navigation: any }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Background isDarkMode={isDarkMode}>
      <ScreenText isDarkMode={isDarkMode}>가짜전화 따르릉</ScreenText>

       <CustomRow alignitems="center" justifycontent="center">
        <CustomButton width="40%" onPress={() => navigation.navigate('AnswerTheFakeCall')}>
          <CustomFont>전화받기</CustomFont>
        </CustomButton>

         <CustomButton width="40%" onPress={() => navigation.navigate('HangUpFakeCall')}>
          <CustomFont>전화거절</CustomFont>
         </CustomButton>
       </CustomRow>
    </Background>
  );
}

export default GetAFakeCall;
