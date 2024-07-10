// MenuPage.tsx

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

type MenuPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MenuPage'>;

const MenuPage: React.FC = () => {
  const navigation = useNavigation<MenuPageNavigationProp>();

  const navigateToProfile = () => {
    navigation.navigate('ProfilePage');
  };

  const navigateToHistory = () => {
    navigation.navigate('HistoryPage');
  };

  const navigateToHelp = () => {
    navigation.navigate('HelpPage');
  };

  const handleLogout = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem} onPress={navigateToProfile}>
        <Text style={styles.menuText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={navigateToHistory}>
        <Text style={styles.menuText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={navigateToHelp}>
        <Text style={styles.menuText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <Text style={styles.menuText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
  },
});

export default MenuPage;
