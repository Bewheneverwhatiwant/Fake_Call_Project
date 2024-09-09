import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, useColorScheme, Image } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'; // Gradient library
import Icon from 'react-native-vector-icons/Ionicons'; // Icon library

import CustomButton from '../components/basic/CustomButton';
import CustomFont from '../components/basic/CustomFont';

// 이미지를 import 합니다
import hungupImage from '../assetsAnswer/hungup.png';

const Background = styled(LinearGradient)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const TopSection = styled.View`
  align-items: center;
`;

const PhoneNumberText = styled.Text<{ isDarkMode: boolean }>`
  font-size: 40px;
  color: #fff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
`;

const TimerText = styled.Text<{ isDarkMode: boolean }>`
  font-size: 24px;
  color: #699AA1;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

const IconButtonGrid = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const IconButtonWrapper = styled.View`
  width: 30%;
  align-items: center;
  margin: 10px 0;
`;

const IconButton = styled.View`
  width: 85px;
  height: 85px;
  border-radius: 43px;
  background: rgba(255, 255, 255, 0.20);
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const IconLabel = styled(CustomFont)`
  color: #fff;
  text-align: center;
  font-family: 'Inter';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const HangUpButtonWrapper = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

const HangUpButton = styled.TouchableOpacity`
  width: 70%;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

function AnswerTheFakeCall({ navigation }: { navigation: any }): React.ReactElement {
  const isDarkMode = useColorScheme() === 'dark';
  const [callTime, setCallTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCallTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Background colors={['#135252', '#06344E']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
      {/* 상단 섹션 */}
      <TopSection>
        <PhoneNumberText isDarkMode={isDarkMode}>010-1234-5678</PhoneNumberText>
        <TimerText isDarkMode={isDarkMode}>{formatTime(callTime)}</TimerText>
      </TopSection>

      {/* 아이콘 버튼 섹션 */}
      <IconButtonGrid>
        <IconButtonWrapper>
          <IconButton>
            <Icon name="mic-off-outline" size={35} color="white" />
          </IconButton>
          <IconLabel>음소거</IconLabel>
        </IconButtonWrapper>

        <IconButtonWrapper>
          <IconButton>
            <Icon name="keypad-outline" size={35} color="white" />
          </IconButton>
          <IconLabel>키패드</IconLabel>
        </IconButtonWrapper>

        <IconButtonWrapper>
          <IconButton>
            <Icon name="volume-high-outline" size={35} color="white" />
          </IconButton>
          <IconLabel>스피커</IconLabel>
        </IconButtonWrapper>

        <IconButtonWrapper>
          <IconButton>
            <Icon name="add-outline" size={35} color="white" />
          </IconButton>
          <IconLabel>추가 기능</IconLabel>
        </IconButtonWrapper>

        <IconButtonWrapper>
          <IconButton>
            <Icon name="videocam-outline" size={35} color="white" />
          </IconButton>
          <IconLabel>영상통화</IconLabel>
        </IconButtonWrapper>

        <IconButtonWrapper>
          <IconButton>
            <Icon name="person-outline" size={35} color="white" />
          </IconButton>
          <IconLabel>연락처</IconLabel>
        </IconButtonWrapper>
      </IconButtonGrid>

      {/* 하단 전화 끊기 버튼 */}
      <HangUpButtonWrapper>
        <HangUpButton onPress={() => navigation.navigate('HangUpFakeCall')}>
          <Image source={hungupImage} style={{ width: 70, height: 70 }} />
        </HangUpButton>
      </HangUpButtonWrapper>
    </Background>
  );
}

export default AnswerTheFakeCall;