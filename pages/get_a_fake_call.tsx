import React from 'react';
import { View, Text, SafeAreaView, useColorScheme, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import CustomButton from '../components/basic/CustomButton';
import CustomRow from '../components/basic/CustomRow';
import CustomColumn from '../components/basic/CustomColumn';
import CustomFont from '../components/basic/CustomFont';
import RejectImg from './images/image6.png'
import AnswerImg from './images/image5.png'
import LaterImg from './images/imagelater.png'
import MessageImg from './images/imagemessage.png'

const Background = styled(SafeAreaView)<{ isDarkMode: boolean }>`
  flex: 1;
  align-items: center;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? Colors.darker : Colors.lighter};
  background-color: #363636
`;

const ScreenText = styled.Text<{ isDarkMode: boolean }>`
  font-size: 40px;
  color: white;
  marginTop:74;
`;

const SmallText = styled.Text<{ isDarkMode: boolean }>`
  font-size: 20px;
  color: white;
  text-align: center;
  marginTop: 24;
`;

const styles = StyleSheet.create({
	 	  RejectImgStyle: {width : 91, height : 92, marginRight: 111, marginBottom: 61},
	 	  AnswerImgStyle: {width : 91, height : 92, marginBottom: 61 },
          LaterImgStyle: {width : 100, height : 67, marginTop: 383, marginBottom: 79, marginRight: 111},
          MessageImgStyle: {width : 100, height : 67, marginTop: 383, marginBottom: 79},
    })

function GetAFakeCall({ navigation }: { navigation: any }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Background isDarkMode={isDarkMode}>
      <ScreenText isDarkMode={isDarkMode}>010-1234-5678</ScreenText>
       <CustomRow alignitems="center" justifycontent="center">
        <TouchableOpacity
            style={styles.LaterImgStyle}>
            <Image source={LaterImg} />
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.MessageImgStyle}>
            <Image source={MessageImg} />

        </TouchableOpacity>
      </CustomRow>

        <CustomRow alignitems="center" justifycontent="center">
          <TouchableOpacity
            onPress={() => navigation.navigate('HangUpFakeCall')}
            style={styles.RejectImgStyle}>
            <Image source={RejectImg} />
            <SmallText isDarkMode={isDarkMode}>거절</SmallText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('AnswerTheFakeCall')}
            style={styles.AnswerImgStyle}>
            <Image source={AnswerImg} />
            <SmallText isDarkMode={isDarkMode}>응답</SmallText>
          </TouchableOpacity>
        </CustomRow>
    </Background>
  );
}

export default GetAFakeCall;
