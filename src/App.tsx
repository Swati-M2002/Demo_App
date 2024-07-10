// App.tsx
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage.tsx';
import RegisterPage from './components/RegisterPage.tsx';
import ProfilePage from './components/ProfilePage';
import HistoryPage from './components/HistoryPage.tsx';
import HelpPage from './components/HelpPage.tsx';
import MenuPage from './components/MenuPage.tsx';
import SettingPage from './components/SettingPage.tsx';
import AboutPage from './components/AboutPage.tsx';


export type RootStackParamList = {
  LandingPage: undefined;
  LoginPage: undefined;
  HomePage: undefined;
  RegisterPage: undefined;
  ProfilePage: undefined;
  HistoryPage: undefined;
  HelpPage: undefined;
  MenuPage: undefined;
  SettingPage: undefined;
  AboutPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="HistoryPage" component={HistoryPage} />
        <Stack.Screen name="HelpPage" component={HelpPage} />
        <Stack.Screen name="MenuPage" component={MenuPage} />
        <Stack.Screen name="SettingPage" component={SettingPage} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
//Test new code