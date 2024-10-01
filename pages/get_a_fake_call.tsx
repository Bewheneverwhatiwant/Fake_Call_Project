import React from 'react';
import { View, Text, SafeAreaView, useColorScheme, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
  LaterImgStyle: { width: 100, height: 67, marginTop: 300, marginBottom: 79, marginRight: 111 },
  MessageImgStyle: { width: 100, height: 67, marginTop: 300, marginBottom: 79 },
});

function GetAFakeCall({ route, navigation }: { route: any, navigation: any }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { senderName, senderNumber } = route.params; // 전달받은 발신자명과 번호

  return (
    <Background isDarkMode={isDarkMode}>
      {/* 발신자 번호 출력 */}
      <ScreenText isDarkMode={isDarkMode}>{senderNumber}</ScreenText>

      {/* 발신자명 출력 */}
      <ScreenText isDarkMode={isDarkMode}>{senderName}</ScreenText>

      <CustomRow alignitems="center" justifycontent="center">
        <TouchableOpacity style={styles.LaterImgStyle}>
          <Image source={LaterImg} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.MessageImgStyle}>
          <Image source={MessageImg} />
        </TouchableOpacity>
      </CustomRow>

      <CustomRow alignitems="center" justifycontent="center">
        {/* 거절 버튼 클릭 시 발신자 번호와 함께 HangUpFakeCall로 이동 */}
        <TouchableOpacity onPress={() => navigation.navigate('HangUpFakeCall', { senderNumber })} style={styles.RejectImgStyle}>
         <Image source={RejectImg} />
         <SmallText isDarkMode={isDarkMode}>거절</SmallText>
        </TouchableOpacity>

       <TouchableOpacity
         onPress={() => navigation.navigate('AnswerTheFakeCall', { senderNumber })}
         style={styles.AnswerImgStyle}>
         <Image source={AnswerImg} />
         <SmallText isDarkMode={isDarkMode}>응답</SmallText>
       </TouchableOpacity>

      </CustomRow>
    </Background>
  );
}

export default GetAFakeCall;
