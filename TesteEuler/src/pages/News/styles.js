import styled from 'styled-components/native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import {  StyleSheet } from 'react-native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  height: 100%;
  background-color: #e8e6ed;
`;

export const Header = styled.View(props => ({
  height: 70,
  paddingVertical: 5,
  paddingHorizontal: 16,
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  flexDirection: 'row',
  backgroundColor: '#f6f6f6',
  shadowOffset:{  width: 10,  height: 10,  },
  shadowColor: 'black',
  shadowOpacity: 1.0,
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
  color: #005d95;
  margin: 0 0 5px 15px;
`;

export const Body = styled.ScrollView`
  display: flex;
  flex: 1;
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

export const InputContainer = styled.View(props => ({
  borderWidth: 1,
  borderColor: props.error ? 'red' : 'white',
  padding: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: StyleSheet.hairlineWidth,
  borderTopWidth: props.noBorder ? 0 : StyleSheet.hairlineWidth,
  borderTopLeftRadius: props.borderRadiusTop ? 4 : 0,
  borderTopRightRadius: props.borderRadiusTop ? 4 : 0,
  borderBottomLeftRadius: props.borderRadiusBottom ? 4 : 0,
  borderBottomRightRadius: props.borderRadiusBottom ? 4 : 0,
  background: '#c9c8ce',
}));

export const Card = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  margin: 5px 0;
  shadowOffset:{  width: 10,  height: 10,  },
`;

export const TimeSlot = styled.Text`
  color: #666;
  font-size: 10px;
  align-self: flex-start;
  margin: 0 5px;
`

export const ActionIcon = styled.Image`
  width: 60px;
  height: 60px;
  margin: 5px;
  border-radius: 30px;
`

export const ListHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 5px 0;
`

export const Content = styled.View`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 5px 5px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #56697d;
  margin: 0 0 5px 0;
`;

export const SubTitle = styled.Text`
  font-size: 12px;
  color: #555;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 200px;
  max-height: 300px;
  max-width: 600px;
`;



