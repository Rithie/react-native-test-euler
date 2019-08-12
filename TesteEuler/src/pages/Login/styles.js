import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { colors } from '~/styles/colors';

export const Container = styled.ScrollView``;

export const Label = styled.Text`
  font-size: 28px;
  color: #f90;
  font-weight: bold;
  align-self: flex-start;
  margin: 0px 0px 25px 0px;
`;

export const ErrorMessage = styled.Text`
  font-size: 13px;
  color: red;
  margin: 10px 5px 5px 5px;
  align-self: center;
`;

export const TextLabel = styled.Text`
  font-size: 16;
  color: #666;
  font-weight: 400;
  text-align: center;
  padding: 20px 0px;
`;

export const SimpleLabel = styled.Text(props => ({
  fontSize: 14,
  color: '#666',
  fontWeight: props.bold ? 'bold' : 'none',
  justifyContent: 'center',
  paddingHorizontal: props.paddingHorizontal || 0,
  paddingVertical: props.paddingVertical || 0,
}));

export const Input = styled.TextInput(props => ({
  borderWidth: 1,
  borderColor: props.error ? 'red' : 'grey',
  padding: 10,
  marginTop: 24,
}));

export const InputContainer = styled.View(props => ({
  borderWidth: 1,
  borderColor: props.error ? 'red' : 'grey',
  padding: 0,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const SimpleButtonLabel = styled.Text(props => ({
  fontSize: props.fontSize || 12,
  color: 'blue',
  marginTop: props.marginTop || 0,
  marginBottom: props.marginTop || 0,
  textDecorationLine: props.underline ? 'underline' : 'none',
  paddingHorizontal: props.paddingHorizontal || 0,

}));
