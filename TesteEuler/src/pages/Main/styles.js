import styled from 'styled-components/native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: #fff;
`;

export const Header = styled.View(props => ({
  height: 70,
  paddingVertical: 5,
  paddingHorizontal: 16,
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  flexDirection: 'row',
  backgroundColor: '#005d95',
  ...ifIphoneX(
    {
      paddingTop: 50,
      height: 110,
    },
    {
      paddingTop: Platform.OS === 'ios' ? 20 : 0,
      height: 60,
    },
  ),
}));

export const HeaderTitle = styled.Text`
  font-weight: bold;
  font-size: 16;
  color: #fff;
  margin: 0 0 5px 15px;
`;

export const Body = styled.View`
  display: flex;
  flex: 1;
  padding: 0px 16px;
`;

export const Placeholder = styled.View`
  display: flex;
  flex: 1;
  padding: 0px 16px;
  align-items: center;
  justify-content: center;
`;

export const PlaceholderTitle = styled.Text`
  font-size: 14px;
  color: #222;
  margin: 0 0 5px 0;
`;

export const ListItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  background: white;
  margin: 5px 0;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 5px 5px;
  border-bottom-width: 1px;
  border-bottom-color: #d8d8d8;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #222;
  margin: 0 0 5px 0;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  color: #555;
`;


export const Avatar = styled.Image`
  width: 60px;
  height: 70px;
`;



