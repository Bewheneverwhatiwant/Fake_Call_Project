import React from 'react';
import { View, Text, SafeAreaView, useColorScheme, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';

import CustomButton from '../components/basic/CustomButton';
import CustomRow from '../components/basic/CustomRow';
import CustomColumn from '../components/basic/CustomColumn';
import CustomFont from '../components/basic/CustomFont';


import Icon from 'react-native-vector-icons/Ionicons'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconM from 'react-native-vector-icons/MaterialIcons'


const Background = styled(LinearGradient).attrs<{ isDarkMode: boolean }>(({ isDarkMode }) => ({
  colors: ['#FFFFFF', '#819AEA', '#77AEEF', '#8B85E5'], // 그라데이션 색상 설정
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
}))<{ isDarkMode: boolean }>`
  flex: 1;
  align-items: center;
`;


const HdBox = styled(Text)<{ isDarkMode: boolean }>`
    font-size:12px;
    color:white;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
`;

const Screenheader = styled.Text<{ isDarkMode: boolean }>`
  font-size: 16px;
  color: black;
  font-family: 'Inter';
  font-style: bold;
  font-weight: 700;
  marginTop:58;
  marginLeft:7
`;

const ScreenTextName = styled.Text<{ isDarkMode: boolean }>`
  font-size: 40px;
  color: black;
  font-style: bold;
  font-weight: 700;
  marginTop:41;
`;

const ScreenTextNum = styled.Text<{ isDarkMode: boolean }>`
  font-size: 25px;
  color: black;
  font-style: regular;
  marginTop:11;
`;

const SmallText = styled.Text<{ isDarkMode: boolean }>`
  font-size: 18px;
  color: white;
  text-align: center;
  marginTop: 12;
  justifyContent: center;
  alignItems: center;

`;

const styles = StyleSheet.create({
	 	  RejectImgStyle: {width : 91, height : 92, marginRight: 111, marginBottom: 61},
	 	  AnswerImgStyle: {width : 91, height : 92, marginBottom: 61 },
          LaterImgStyle: {width : 100, height : 67, marginTop: 383, marginBottom: 79, marginRight: 111},
          MessageImgStyle: {width : 100, height : 67, marginTop: 383, marginBottom: 79},
          HD:{width: 22, height: 17, paddingLeft: 2, paddingRight:2, marginTop:58, backgroundColor: '#000000', borderRadius: 2},
          Circle:{width: 120, height:120, backgroundColor: '#0000000', marginTop:24, borderRadius:100 }
    })

function GetAFakeCall({ navigation }: { navigation: any }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Background isDarkMode={isDarkMode}>
        <CustomRow>
            <HdBox style={styles.HD}>HD</HdBox>
            <Screenheader>Voice 수신전화</Screenheader>
        </CustomRow>
        <ScreenTextName isDarkMode={isDarkMode}>발신자명</ScreenTextName>
        <ScreenTextNum isDarkMode={isDarkMode}>010-1234-5678</ScreenTextNum>
        <IconFA name='circle' size={120} color="black" marginTop={24}/>

        <CustomRow alignitems="center" justifycontent="center" gap={53}>
            <CustomColumn alignitems="center" justifycontent="center">
                <Icon name='call' size={15} color="white" marginTop={76}/>
                <SmallText isDarkMode={isDarkMode}>마지막 통화{"\n"}오후 1:07</SmallText>
            </CustomColumn>


            <CustomColumn alignitems="center" justifycontent="center">
                <Icon name='chatbox-outline' size={15} color="white" marginTop={50}/>
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
                borderRadius: 40, // 원형으로 만들기 위해 반지름을 높이의 절반으로 설정
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:146,
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
                    borderRadius: 40, // 원형으로 만들기 위해 반지름을 높이의 절반으로 설정
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:146,
                }}>
                    <IconM name='call-end' size={37} color="#FF453A" />
            </TouchableOpacity>
            </CustomColumn>

        </CustomRow>
    </Background>
  );
}

export default GetAFakeCall;
