import React from 'react';
import { View, ScrollView, StatusBar, useColorScheme, SafeAreaView, Text, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import CustomButton from '../components/basic/CustomButton';
import CustomRow from '../components/basic/CustomRow';
import CustomColumn from '../components/basic/CustomColumn';
import CustomFont from '../components/basic/CustomFont';

// 화면의 높이를 가져옴
const { height: screenHeight } = Dimensions.get('window');

//type script 사용법

// (0) Section이라는 스타일 속성을 만들기 위해, SectionProps 타입 먼저 정의한다.
type SectionProps = {
  title: string;
  children: React.ReactNode;
};

// (1) Styled Component로 컨테이너 스타일 지정
const SectionContainer = styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

// (2) 타이틀 스타일 지정
const SectionTitle = styled.Text<{ isDarkMode: boolean }>`
  font-size: 24px;
  font-weight: 600;
  color: ${({ isDarkMode }) => (isDarkMode ? Colors.white : Colors.black)};
`;

// (3) description 스타일 지정
const SectionDescription = styled.Text<{ isDarkMode: boolean }>`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${({ isDarkMode }) => (isDarkMode ? Colors.light : Colors.dark)};
`;

// (0) + (1) + (2) + (3) = Section 컴포넌트가 된다!
function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SectionContainer>
      <SectionTitle isDarkMode={isDarkMode}>{title}</SectionTitle>
      <SectionDescription isDarkMode={isDarkMode}>{children}</SectionDescription>
    </SectionContainer>
  );
}

// Background 스타일 정의
const Background = styled(SafeAreaView)<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? Colors.darker : Colors.lighter};
  min-height: ${screenHeight}px; /* 숫자 값만 사용 */
`;

// 버튼 스타일 정의
const StyledButton = styled(TouchableOpacity)`
  width: 200px;
  padding: 10px;
  background-color: #6200ee;
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
`;

// StyledButtonText styled component
const StyledButtonText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: 600;
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
        style={{
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          minHeight: screenHeight, // ScrollView도 화면 높이로 설정
        }}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            minHeight: screenHeight, // 내부 View도 화면 높이로 설정
          }}>
          <Section title="하이">
            리액트 네이티브 메인화면!
          </Section>

          <CustomColumn height="50px">
            <CustomRow alignitems="center" justifycontent="center">
              <CustomButton width="60%" onPress={() => navigation.navigate('GetAFakeCall')}>
                <CustomFont>가짜 전화 받으러 이동</CustomFont>
              </CustomButton>
            </CustomRow>
          </CustomColumn>
        </View>
      </ScrollView>
    </Background>
  );
}

export default MainScreen;
