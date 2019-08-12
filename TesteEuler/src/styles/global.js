import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';

import colors from './colors';

export const Row = styled.View(props => ({
  marginTop: props.marginTop || 0,
  marginBottom: props.marginTop || 0,
  padding: props.padding || 0,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${colors.transparent};
  padding: 5px 32px;
  background-color: ${colors.primaryDarkBlue};
  height: 60px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.white};
  padding: 5px 32px;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.white};
  padding: 5px 24px;
  height: 100px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${colors.primaryDarkBlue};
  font-weight: bold;
  text-align: left;
  line-height: 22px;
  letter-spacing: 0px;
  align-self: flex-start;
  font-family: 'AvenirLTStd-Heavy';
`;

export const HeadTitle = styled.Text`
  font-size: 28px;
  color: ${colors.primaryDarkBlue};
  font-weight: bold;
  text-align: left;
  line-height: 22px;
  letter-spacing: 0px;
  align-self: flex-start;
`;

export const ContentText = styled.Text`
  font-size: 15px;
  color: ${colors.contentGrey};
  text-align: left;
  line-height: 23px;
  letter-spacing: 0px;
  align-self: flex-start;
  margin: 20px 0px;
  font-family: 'AvenirLTStd-Book';
`;

export const ProfilePicture = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const TextContainer = styled.Text(props => ({
  fontSize: props.fontSize || 14,
  color: props.color ? props.color : colors.grey1,
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: props.bold ? '600' : '100',
  paddingHorizontal: props.paddingHorizontal || 0,
  paddingVertical: props.paddingVertical || 0,
  paddingTop: props.paddingTop || 0,
  textTransform: props.upper ? 'uppercase' : 'none',
  fontFamily: props.fontFamily ? props.fontFamily : 'AvenirLTStd-Medium',
}));
