import React, { useEffect } from 'react';
import { SafeAreaView, useColorScheme, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomRow from '../components/basic/CustomRow';
import RejectImg from './images/image6.png';
import AnswerImg from './images/image5.png';
import LaterImg from './images/imagelater.png';
import MessageImg from './images/imagemessage.png';

const Background = styled(SafeAreaView)<{ isDarkMode: boolean }>`
  flex: 1;
  align-items: center;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? Colors.darker : Colors.lighter};
  background-color: #363636;
`;

const ScreenText = styled.Text<{ isDarkMode: boolean }>`
  font-size: 40px;
  color: white;
  marginTop: 30px;
`;

const SmallText = styled.Text<{ isDarkMode: boolean }>`
  font-size: 20px;
  color: white;
  text-align: center;
  marginTop: 10px;
`;

const styles = StyleSheet.create({
  RejectImgStyle: { width: 91, height: 92, marginRight: 111, marginBottom: 61 },
  AnswerImgStyle: { width: 91, height: 92, marginBottom: 61 },
  LaterImgStyle: { width: 100, height: 67, marginTop: 230, marginBottom: 79, marginRight: 111 },
  MessageImgStyle: { width: 100, height: 67, marginTop: 230, marginBottom: 79 },
});

function HangUpFakeCall({ route, navigation }: { route: any, navigation: any }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { senderNumber } = route.params;

  useEffect(() => {
    // 2초 후에 MainScreen으로 이동
    const timeoutId = setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);

    // 컴포넌트 언마운트 시 타이머를 클리어
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <Background isDarkMode={isDarkMode}>
      {/* 텍스트 출력 */}
     <ScreenText isDarkMode={isDarkMode}>{senderNumber}</ScreenText>

      <CustomRow alignitems="center" justifycontent="center">
        <TouchableOpacity style={styles.LaterImgStyle}>
          <Image source={LaterImg} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.MessageImgStyle}>
          <Image source={MessageImg} />
        </TouchableOpacity>
      </CustomRow>

    </Background>
  );
}

export default HangUpFakeCall;
