// CustomRow.tsx
import styled from 'styled-components/native';
import { View } from 'react-native';

// gap 속성은 React Native의 Flexbox에서는 직접 지원하지 않으므로, 대신 margin을 사용하거나
// 각 자식 컴포넌트에 여백을 설정하는 방식으로 구현해야 한다.

// props 타입 정의
interface CustomRowProps {
  width?: string;
  maxwidth?: string;
  height?: string;
  gap?: string; // Flexbox의 gap 지원은 제한적이므로 주의
  alignitems?: string;
  justifycontent?: string;
  margin?: string;
  padding?: string;
}

// Styled View 컴포넌트
const CustomRow = styled(View)<CustomRowProps>`
  flex-direction: row;
  width: ${(props) => props.width || 'auto'};
  max-width: ${(props) => props.maxwidth || 'none'};
  height: ${(props) => props.height || 'auto'};
  align-items: ${(props) => props.alignitems || 'center'};
  justify-content: ${(props) => props.justifycontent || 'center'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;

export default CustomRow;
