import React from 'react';
import { View, Text, SafeAreaView, useColorScheme, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomRow from '../components/basic/CustomRow';
import RejectImg from './images/image6.png';
import AnswerImg from './images/image5.png';
import LaterImg from './images/imagelater.png';
import MessageImg from './images/imagemessage.png';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient'; // LinearGradient 추가

const Background = styled(LinearGradient).attrs<{ isDarkMode: boolean }>(({ isDarkMode }) => ({
  colors: ['#FFFFFF', '#819AEA', '#77AEEF', '#8B85E5'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))<{ isDarkMode: boolean }>`
  flex: 1;
  align-items: center;
`;

const HdBox = styled(Text)<{ isDarkMode: boolean }>`
  font-size: 12px;
  color: white;
  font-family: 'Inter';
  font-weight: 700;
`;

const Screenheader = styled(Text)<{ isDarkMode: boolean }>`
  font-size: 16px;
  color: black;
  font-family: 'Inter';
  font-weight: 700;
  margin-top: 58px;
  margin-left: 7px;
`;

const ScreenTextName = styled(Text)<{ isDarkMode: boolean }>`
  font-size: 40px;
  color: black;
  font-weight: 700;
  margin-top: 41px;
`;

const ScreenTextNum = styled(Text)<{ isDarkMode: boolean }>`
  font-size: 25px;
  color: black;
  margin-top: 11px;
`;

const SmallText = styled(Text)<{ isDarkMode: boolean }>`
  font-size: 18px;
  color: white;
  text-align: center;
  margin-top: 10px;
`;

const styles = StyleSheet.create({
  RejectImgStyle: { width: 91, height: 92, marginRight: 111, marginBottom: 61 },
  AnswerImgStyle: { width: 91, height: 92, marginBottom: 61 },
  LaterImgStyle: { width: 100, height: 67, marginTop: 383, marginBottom: 79, marginRight: 111 },
  MessageImgStyle: { width: 100, height: 67, marginTop: 383, marginBottom: 79 },
  HD: { width: 22, height: 17, paddingLeft: 2, paddingRight: 2, marginTop: 58, backgroundColor: '#000000', borderRadius: 2 },
  Circle: { width: 120, height: 120, backgroundColor: '#0000000', marginTop: 24, borderRadius: 100 }
});

function GetAFakeCall({ route, navigation }: { route: any, navigation: any }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { senderName, senderNumber } = route.params;

  return (
    <Background isDarkMode={isDarkMode}>
      <ScreenTextNum isDarkMode={isDarkMode}>{senderNumber}</ScreenTextNum>
      <ScreenTextName isDarkMode={isDarkMode}>{senderName}</ScreenTextName>

      <CustomRow alignitems="center" justifycontent="center">
        <TouchableOpacity style={styles.LaterImgStyle}>
          <Image source={LaterImg} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.MessageImgStyle}>
          <Image source={MessageImg} />
        </TouchableOpacity>
      </CustomRow>

      <CustomRow alignitems="center" justifycontent="center">
        <TouchableOpacity onPress={() => navigation.navigate('HangUpFakeCall', { senderNumber })} style={styles.RejectImgStyle}>
          <Image source={RejectImg} />
          <SmallText isDarkMode={isDarkMode}>거절</SmallText>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AnswerTheFakeCall', { senderNumber })} style={styles.AnswerImgStyle}>
          <Image source={AnswerImg} />
          <SmallText isDarkMode={isDarkMode}>응답</SmallText>
        </TouchableOpacity>
      </CustomRow>

      <CustomRow>
        <HdBox style={styles.HD}>HD</HdBox>
        <Screenheader isDarkMode={isDarkMode}>Voice 수신전화</Screenheader>
      </CustomRow>

      <CustomRow alignitems="center" justifycontent="center" gap={53}>
        <CustomColumn alignitems="center" justifycontent="center">
          <Icon name='call' size={15} color="white" style={{ marginTop: 76 }} />
          <SmallText isDarkMode={isDarkMode}>마지막 통화{"\n"}오후 1:07</SmallText>
        </CustomColumn>

        <CustomColumn alignitems="center" justifycontent="center">
          <Icon name='chatbox-outline' size={15} color="white" style={{ marginTop: 50 }} />
          <SmallText isDarkMode={isDarkMode}>메세지</SmallText>
        </CustomColumn>
      </CustomRow>

      <CustomRow alignitems="center" justifycontent="center" gap={150}>
        <CustomColumn alignitems="center" justifycontent="center">
          <TouchableOpacity
            onPress={() => navigation.navigate('HangUpFakeCall')}
            style={{
              width: 83,
              height: 80,
              borderRadius: 40,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 146,
            }}>
            <IconM name='call' size={37} color="#2ECF56" />
          </TouchableOpacity>
        </CustomColumn>

        <CustomColumn alignitems="center" justifycontent="center">
          <TouchableOpacity
            onPress={() => navigation.navigate('HangUpFakeCall')}
            style={{
              width: 83,
              height: 80,
              borderRadius: 40,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 146,
            }}>
            <IconM name='call-end' size={37} color="#FF453A" />
          </TouchableOpacity>
        </CustomColumn>
      </CustomRow>
    </Background>
  );
}

export default GetAFakeCall;
