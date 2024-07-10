import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal, Pressable, ImageBackground, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

import img3 from '../assets/pexels-readymade-4033680.jpg';
import iconImage from '../assets/Default-Profile.jpg';

type HomePageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomePage'>;

type Props = {
  navigation: HomePageNavigationProp;
};

const HomePage: React.FC<Props> = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateToProfile = () => {
    setMenuVisible(false);
    navigation.navigate('ProfilePage');
  };

  const navigateToHistory = () => {
    setMenuVisible(false);
    navigation.navigate('HistoryPage');
  };

  const handleLogout = () => {
    setMenuVisible(false);
    navigation.navigate('LoginPage');
  };

  const navigateToHelp = () => {
    setMenuVisible(false);
    navigation.navigate('HelpPage');
  };

  return (
    <ImageBackground
      source={img3}
      style={styles.background}
    >
      <View style={styles.container}>
        
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={toggleMenu}
        >
          <Image source={iconImage} style={styles.icon} />
        </TouchableOpacity>

        {/* Menu Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={menuVisible}
          onRequestClose={() => setMenuVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.menuContainer}>
              <Pressable style={styles.menuItem} onPress={navigateToProfile}>
                <Text style={styles.menuText}>Profile</Text>
              </Pressable>
              <Pressable style={styles.menuItem} onPress={navigateToHistory}>
                <Text style={styles.menuText}>History</Text>
              </Pressable>
              <Pressable style={styles.menuItem} onPress={navigateToHelp}>
                <Text style={styles.menuText}>Help</Text>
              </Pressable>
              <Pressable style={styles.menuItem} onPress={handleLogout}>
                <Text style={styles.menuText}>Logout</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.buttonContainer}>
          <Button
            title="Exit"
            onPress={() => navigation.navigate('LandingPage')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    position: 'absolute',
    top: 10,
    left: 130,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 18,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 100,
  },
  icon: {
    width: 30,
    height: 30,
  }
});

export default HomePage;
