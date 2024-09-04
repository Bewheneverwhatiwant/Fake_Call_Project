// StyledImg.tsx
import styled from 'styled-components/native';
import { Image, ImageProps } from 'react-native';

// props 타입 정의
interface StyledImgProps extends ImageProps {
  width?: string; // 숫자로도 사용 가능
  height?: string; // 숫자로도 사용 가능
  margin?: string;
  padding?: string;
  borderradius?: string; // border-radius 대신 borderRadius 사용
  border?: string; // React Native는 직접적인 border 스타일이 다름
}

// Styled Image 컴포넌트
const StyledImg = styled(Image)<StyledImgProps>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  border-radius: ${(props) => props.borderradius || '0'};
  border-width: ${(props) => (props.border ? '1px' : '0')}; // 단순히 유무로 처리, 상세한 border 속성은 객체로 설정 필요
  border-color: ${(props) => (props.border ? '#000' : 'transparent')}; // border 기본 색상 설정
`;

export default StyledImg;
