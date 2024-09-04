// CustomFont.tsx
import styled from 'styled-components/native';
import { Text } from 'react-native';

// rpops 전달에서 오류 발생 중

// props 타입 정의
// interface CustomFontProps {
//   fontsize?: number; // 숫자로 사용
//   color?: string;
//   fontweight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'; // 문자열로 명확하게 지정
//   fontfamily?: string;
// }
//
// // Styled Text 컴포넌트
// const CustomFont = styled(Text)<CustomFontProps>`
//   font-size: ${(props) => props.fontsize || 13}px; // 'px'를 사용하지 않고 숫자만
//   color: ${(props) => props.color || '#F0F0F0'};
//   font-weight: ${(props) => props.fontweight || 'normal'}; // 숫자 대신 문자열로 지정
//   font-family: ${(props) => props.fontfamily || 'System'};
// `;

const CustomFont = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export default CustomFont;
