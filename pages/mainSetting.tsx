import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const OptionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const OptionText = styled.Text`
  font-size: 18px;
`;

const SettingButton = styled.TouchableOpacity`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;

const mainSetting = () => {
  const [bellOn, setBellOn] = useState(false);
  const [vibrateOn, setVibrateOn] = useState(true);

  return (
    <Container>
      <OptionRow>
        <OptionText>벨소리</OptionText>
        <Switch
          value={bellOn}
          onValueChange={(value) => setBellOn(value)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={bellOn ? '#4caf50' : '#f4f3f4'}
        />
      </OptionRow>

      <OptionRow>
        <OptionText>진동</OptionText>
        <Switch
          value={vibrateOn}
          onValueChange={(value) => setVibrateOn(value)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={vibrateOn ? '#4caf50' : '#f4f3f4'}
        />
      </OptionRow>

      <SettingButton>
        <Text>안드로이드 기본 벨소리</Text>
      </SettingButton>
    </Container>
  );
};

export default mainSetting;
