import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; 
import { useNavigation, RouteProp } from '@react-navigation/native';
import img2 from '../assets/pexels-gabby-k-9430888.jpg'; 

type LoginPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginPage'>;
//type LoginPageRouteProp = RouteProp<RootStackParamList, 'LoginPage'>;

type Props = {
  navigation: LoginPageNavigationProp;
  //route: LoginPageRouteProp;
};

const LoginPage: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (!username || !password ) {
      Alert.alert('Missing Information', 'Please fill in all fields.');
      return;
    }

    if (username.length > 20) {
      Alert.alert('Invalid Username', 'Username cannot exceed 20 characters.');
      return;
    }

    navigation.navigate('HomePage');
  };

  const handleRegister = () => {
    navigation.navigate('RegisterPage');
  };

  return (
    <ImageBackground
      source={img2}
      style={styles.background}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>Don't have an account? Register here</Text>
      </TouchableOpacity>
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
    padding: 20,
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  registerText: {
    textAlign: 'center',
    marginTop: 30,
    color: 'blue', 
    fontWeight: 'bold',
    fontSize: 15
  },
});

export default LoginPage;
