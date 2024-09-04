// CustomColumn.tsx
import styled from 'styled-components/native';
import { View } from 'react-native';

// props 타입 정의
interface CustomColumnProps {
  width?: string;
  height?: string;
  gap?: string; // Flexbox의 gap 지원은 제한적이므로 주의
  alignitems?: string;
  justifycontent?: string;
  margin?: string;
  padding?: string;
}

// Styled View 컴포넌트
const CustomColumn = styled(View)<CustomColumnProps>`
  flex-direction: column;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  align-items: ${(props) => props.alignitems || 'center'};
  justify-content: ${(props) => props.justifycontent || 'center'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;

export default CustomColumn;
