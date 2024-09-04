import React from 'react';
import { View, Button, ScrollView, StatusBar, useColorScheme, SafeAreaView, Text } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// SectionProps 타입 정의
type SectionProps = {
  title: string;
  children: React.ReactNode;
};

// Styled Components 정의
const SectionContainer = styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const SectionTitle = styled.Text<{ isDarkMode: boolean }>`
  font-size: 24px;
  font-weight: 600;
  color: ${({ isDarkMode }) => (isDarkMode ? Colors.white : Colors.black)};
`;

const SectionDescription = styled.Text<{ isDarkMode: boolean }>`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${({ isDarkMode }) => (isDarkMode ? Colors.light : Colors.dark)};
`;

// Section 컴포넌트
function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SectionContainer>
      <SectionTitle isDarkMode={isDarkMode}>{title}</SectionTitle>
      <SectionDescription isDarkMode={isDarkMode}>{children}</SectionDescription>
    </SectionContainer>
  );
}

// Background styled component
const Background = styled(SafeAreaView)<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? Colors.darker : Colors.lighter};
`;

// MainScreen 컴포넌트
function MainScreen({ navigation }: { navigation: any }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Background isDarkMode={isDarkMode}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: isDarkMode ? Colors.darker : Colors.lighter }}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="하이">
            리액트 네이티브 메인화면!
          </Section>
          <Section title="안내">
            벼락치기!!!
          </Section>
          <Button
            title="서브 화면으로 이동"
            onPress={() => navigation.navigate('Sub')}
          />
        </View>
      </ScrollView>
    </Background>
  );
}

export default MainScreen;
