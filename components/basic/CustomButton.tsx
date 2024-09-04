// CustomButton.tsx
import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

// 안드로이드 스투디오의 경우 초록색 밑줄은, 맞춤법 검사기가 불필요하게 반응하는 것이니
// 오류가 아닙니다. 걱정마세요 ~

// CustomButtonProps 타입 정의
interface CustomButtonProps extends TouchableOpacityProps {
  width?: string;
  height?: string;
  gap?: string;
  display?: string;
  alignitems?: string;
  justifycontent?: string;
  margin?: string;
  padding?: string;
  backgroundcolor?: string;
  border?: string;
  borderradius?: string;
  children: React.ReactNode; // 버튼 내용
}

// Styled TouchableOpacity 컴포넌트
const StyledButton = styled(TouchableOpacity)<CustomButtonProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '48px'};
  display: ${(props) => props.display || 'flex'};
  align-items: ${(props) => props.alignitems || 'center'};
  justify-content: ${(props) => props.justifycontent || 'center'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '12px 24px'};
  background-color: ${(props) => props.backgroundcolor || '#AFAFAF'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.borderradius || '8px'};
`;

// CustomButton 컴포넌트 정의
const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  ...props
}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default CustomButton;
