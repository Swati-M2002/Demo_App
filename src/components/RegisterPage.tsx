// RegisterPage.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; 
import { useNavigation, RouteProp } from '@react-navigation/native';
import img4 from '../assets/pexels-gabby-k-9430888.jpg';

type RegisterPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RegisterPage'>;
type RegisterPageRouteProp = RouteProp<RootStackParamList, 'RegisterPage'>;

type Props = {
  navigation: RegisterPageNavigationProp;
  route: RegisterPageRouteProp;
};

const RegisterPage: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nationality, setNationality] = useState('');

  const handleRegister = () => {
    if (!username || !email || !phoneNumber || !address || !password || !confirmPassword || !nationality) {
      Alert.alert('Missing Information', 'Please fill in all fields.');
      return;
    }

    if (username.length > 20) {
      Alert.alert('Invalid Username', 'Username cannot exceed 20 characters.');
      return;
    }

    if (!email.endsWith('@gmail.com')) {
      Alert.alert('Invalid Email', 'Please use a Gmail address.');
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Phone number must be 10 digits.');
      return;
    }

    navigation.navigate('LoginPage');
  };

  return (
    <ImageBackground source={img4} style={styles.background} >
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Nationality"
        value={nationality}
        onChangeText={setNationality}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      
      <Button title="Register" onPress={handleRegister} />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default RegisterPage;
