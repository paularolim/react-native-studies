import React, { useState, useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Home } from '../../screens/Home';

import {
  Container,
  ImageContainer,
  LinkText,
  LinkContainer,
  Menu,
  ProfileImage,
  ProfileName,
  ScreenContainer,
  TabContainer,
  TabIcon,
  TabItem,
  TabText,
} from './styles';

const img = 'https://images.unsplash.com/photo-1494354145959-25cb82edf23d';

interface TabButtonProps {
  title: string;
  icon: string;
  activeTab: string;
  setActiveTab: any;
}

function TabButton({ title, icon, activeTab, setActiveTab }: TabButtonProps) {
  const active = activeTab === title;

  return (
    <TabItem active={active} onPress={() => setActiveTab(title)}>
      <TabIcon name={icon} active={active} />
      <TabText active={active}>{title}</TabText>
    </TabItem>
  );
}

export function Drawer() {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const scaleValue = useRef(new Animated.Value(1)).current;
  const offsetValue = useRef(new Animated.Value(0)).current;

  return (
    <Container>
      <Menu>
        <ImageContainer>
          <ProfileImage source={{ uri: img }} />
        </ImageContainer>
        <ProfileName>Courtney James</ProfileName>
        <LinkContainer>
          <LinkText>View Profile</LinkText>
        </LinkContainer>

        <TabContainer>
          <TabButton title="Home" icon="home" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton
            title="Search"
            icon="search"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            title="Notifications"
            icon="bell"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabButton
            title="Settings"
            icon="cog"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </TabContainer>
      </Menu>

      <ScreenContainer
        style={{
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        <TouchableOpacity
          onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true,
            }).start();

            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true,
            }).start();

            setShowMenu(!showMenu);
          }}
        >
          <Icon name={showMenu ? 'times' : 'bars'} size={30} />
        </TouchableOpacity>
        {activeTab === 'Home' && <Home />}
      </ScreenContainer>
    </Container>
  );
}
