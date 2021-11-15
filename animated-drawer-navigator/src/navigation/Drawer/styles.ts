import { Animated, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { IconProps } from 'react-native-vector-icons/Icon';
import { colors } from '../../style/colors';

interface TabItemProps extends TouchableOpacityProps {
  active: boolean;
}

interface TabIconProps extends IconProps {
  active?: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${colors.primary};
  `;

export const Menu = styled.View`
  padding: 50px 20px;
`;

export const ImageContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: ${colors.gray};
  overflow: hidden;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProfileName = styled.Text`
  font-size: 20px;
  color: ${colors.white};
  font-weight: bold;
  margin-top: 14px;
`;

export const LinkContainer = styled.TouchableOpacity``;

export const LinkText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  margin-top: 4px;
`;

export const TabContainer = styled.View`
  margin-top: 30px;
`;

export const TabItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${(props: TabItemProps) => (props.active ? colors.white : colors.primary)};
  margin-bottom: 5px;
  padding: 10px 30px 10px 15px;
  border-radius: 10px;
`;

export const TabText = styled.Text`
  font-size: 16px;
  color: ${(props: TabItemProps) => (props.active ? colors.primary : colors.white)};
  margin-left: 10px;
`;

export const ScreenContainer = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 50px 20px;
  background-color: ${colors.white};
  border-radius: 20px;
`;

export const TabIcon: TabIconProps = styled(Icon).attrs((props: TabIconProps) => ({
  color: (props.active ? colors.primary : colors.white),
  size: 20,
}))``;
