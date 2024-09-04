import React from 'react';
import { View, Text, SafeAreaView, useColorScheme } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

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

function SubScreen({ navigation }: { navigation: any }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Background isDarkMode={isDarkMode}>
      <ScreenText isDarkMode={isDarkMode}>여기는 서브화면</ScreenText>
    </Background>
  );
}

export default SubScreen;
