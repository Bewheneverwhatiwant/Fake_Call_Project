import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  useColorScheme,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ActivityIndicator,
  Modal,
  Button,
} from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'; // localStorage 대체

const { height: screenHeight } = Dimensions.get('window');

// Styled components 정의
const SectionContainer = styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

const SectionTitle = styled.Text<{ isDarkMode: boolean }>`
  font-size: 24px;
  font-weight: 600;
  color: ${({ isDarkMode }) => (isDarkMode ? Colors.white : Colors.black)};
`;

const Background = styled(SafeAreaView)<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? Colors.darker : Colors.lighter};
  min-height: ${screenHeight}px;
`;

const StyledButton = styled(TouchableOpacity)`
  width: 200px;
  padding: 10px;
  background-color: #6200ee;
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
`;

const StyledButtonText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

const GearButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const GearIcon = styled(Text)`
  font-size: 30px;
`;

function MainScreen({ navigation }: { navigation: any }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [senderName, setSenderName] = useState('');
  const [senderNumber, setSenderNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [selectedTime, setSelectedTime] = useState("발신 시각 예약");

  const handleSaveAndNavigate = async () => {
    if (senderName && senderNumber) {
      setIsLoading(true);

      try {
        await AsyncStorage.setItem('senderName', senderName);
        await AsyncStorage.setItem('senderNumber', senderNumber);

        setTimeout(() => {
          setIsLoading(false);
          navigation.navigate('GetAFakeCall');
        }, 2000);
      } catch (error) {
        console.error('Error saving sender info: ', error);
        setIsLoading(false);
      }
    } else {
      alert('발신자명과 번호를 입력해주세요.');
    }
  };

  const openPicker = () => {
    setIsPickerVisible(true);
  };

  const handleConfirmTime = () => {
    setSelectedTime(`${hours}시간 ${minutes}분 ${seconds}초`);
    setIsPickerVisible(false);
  };

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
          minHeight: screenHeight,
        }}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            minHeight: screenHeight,
            padding: 20,
          }}>
          <SectionContainer>
            <SectionTitle isDarkMode={isDarkMode}>발신자 정보를 입력해주세요</SectionTitle>

            <TextInput
              placeholder="발신자명"
              value={senderName}
              onChangeText={setSenderName}
              style={{
                borderBottomWidth: 1,
                borderColor: 'gray',
                marginBottom: 20,
                padding: 10,
                fontSize: 18,
              }}
            />
            <TextInput
              placeholder="발신자 번호"
              value={senderNumber}
              onChangeText={setSenderNumber}
              style={{
                borderBottomWidth: 1,
                borderColor: 'gray',
                marginBottom: 20,
                padding: 10,
                fontSize: 18,
              }}
            />

            {/* 발신 시각 예약 버튼 */}
            <TouchableOpacity
              onPress={openPicker}
              style={{
                borderBottomWidth: 1,
                borderColor: 'gray',
                marginBottom: 20,
                padding: 10,
                fontSize: 18,
              }}>
              <Text>{selectedTime}</Text>
            </TouchableOpacity>

            <StyledButton onPress={handleSaveAndNavigate}>
              <StyledButtonText>통화 예약하기</StyledButtonText>
            </StyledButton>

            {isLoading && (
              <ActivityIndicator size="large" color="#6200ee" style={{ marginTop: 20 }} />
            )}

            {/* 발신 시각 예약 모달 */}
            <Modal visible={isPickerVisible} animationType="slide" transparent={true}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 20,
                    borderRadius: 10,
                    alignItems: 'center',
                  }}>
                  <Text>시간을 선택하세요</Text>

                  {/* 시간 선택 드롭다운 */}
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                      keyboardType="numeric"
                      value={String(hours)}
                      onChangeText={(text) => setHours(parseInt(text) || 0)}
                      style={{ width: 50, textAlign: 'center', marginHorizontal: 10 }}
                      placeholder="시"
                    />
                    <Text>시간</Text>

                    <Text>:</Text>

                    <TextInput
                      keyboardType="numeric"
                      value={String(minutes)}
                      onChangeText={(text) => setMinutes(parseInt(text) || 0)}
                      style={{ width: 50, textAlign: 'center', marginHorizontal: 10 }}
                      placeholder="분"
                    />
                    <Text>분</Text>

                    <Text>:</Text>

                    <TextInput
                      keyboardType="numeric"
                      value={String(seconds)}
                      onChangeText={(text) => setSeconds(parseInt(text) || 0)}
                      style={{ width: 50, textAlign: 'center', marginHorizontal: 10 }}
                      placeholder="초"
                    />
                    <Text>초</Text>
                  </View>

                  <Button title="확인" onPress={handleConfirmTime} />
                </View>
              </View>
            </Modal>
          </SectionContainer>

          {/* 톱니바퀴 버튼 */}
          <GearButton onPress={() => navigation.navigate('mainSetting')}>
            <GearIcon>⚙️</GearIcon>
          </GearButton>
        </View>
      </ScrollView>
    </Background>
  );
}

export default MainScreen;
