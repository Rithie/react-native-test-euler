import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  height: 100%;
  flex: 1;
  width: 100%;
  background-color: #fff;
  z-index: 200;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
`;

export const ImagePlaceholder = styled.Image`
  width: 300px;
  height: 350px;
`;
