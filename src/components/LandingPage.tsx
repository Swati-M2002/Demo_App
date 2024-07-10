import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App'; 
import img from '../assets/pexels-greta-hoffman-7674991.jpg'; 

type LandingPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LandingPage'>;
type LandingPageRouteProp = RouteProp<RootStackParamList, 'LandingPage'>;

type Props = {
  navigation: LandingPageNavigationProp;
  route: LandingPageRouteProp;
};

const LandingPage: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      source={img}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LoginPage')}
          >
            <Text style={styles.buttonText}>Let's Start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('RegisterPage')}
          >
            <Text style={styles.buttonText}>Register Now</Text>
          </TouchableOpacity>
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
    justifyContent: 'flex-end', 
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 40, 
  },
  content: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(0.2, 0.2, 0.7, 0.6)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LandingPage;
