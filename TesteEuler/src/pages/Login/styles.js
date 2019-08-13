import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { colors } from '~/styles/colors';

export const Container = styled.ScrollView``;

export const Label = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Row = styled.View`
  margin: 20px 0 10px 0;
`;
export const ErrorMessage = styled.Text`
  font-size: 13px;
  color: red;
  margin: 10px 5px 5px 5px;
  align-self: center;
`;

export const Header = styled.View(props => ({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
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

export const SimpleLabel = styled.Text(props => ({
  fontSize: 14,
  color: props.color ? props.color : '#fff',
  justifyContent: 'center',
  paddingHorizontal: props.paddingHorizontal || 0,
  paddingVertical: props.paddingVertical || 0,
}));

export const InputContainer = styled.View(props => ({
  borderWidth: 1,
  borderColor: props.error ? 'red' : 'white',
  padding: 0,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: StyleSheet.hairlineWidth,
  borderTopWidth: props.noBorder ? 0 : StyleSheet.hairlineWidth,
  borderTopLeftRadius: props.borderRadiusTop ? 4 : 0,
  borderTopRightRadius: props.borderRadiusTop ? 4 : 0,
  borderBottomLeftRadius: props.borderRadiusBottom ? 4 : 0,
  borderBottomRightRadius: props.borderRadiusBottom ? 4 : 0,

}));

export const SimpleButtonLabel = styled.Text(props => ({
  fontSize: props.fontSize || 12,
  color: 'white',
  marginTop: props.marginTop || 0,
  marginBottom: props.marginTop || 0,
  textDecorationLine: props.underline ? 'underline' : 'none',
  paddingHorizontal: props.paddingHorizontal || 0,
}));

export const SolidButton = styled.TouchableOpacity(props => ({
  borderWidth: 1,
  borderColor: 'white',
  marginVertical: 10,
  paddingVertical: 10,
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: StyleSheet.hairlineWidth,
  borderRadius: 4,
  backgroundColor: props.color ? props.color: '#fff',
}));
export const OutlineButton = styled.TouchableOpacity(props => ({
  borderWidth: 1,
  borderColor: 'white',
  marginBottom: 30,
  paddingVertical: 2,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: StyleSheet.hairlineWidth,
  borderRadius: 4,
  width: '100%',
}));
