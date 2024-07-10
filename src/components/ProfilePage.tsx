// ProfilePage.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import img2 from '../Default-Profile.jpg';
import { GestureResponderEvent } from 'react-native';

const ProfilePage: React.FC = () => {
  const [username, setUsername] = useState('John Doe'); // Replace with dynamic data
  const [email, setEmail] = useState('johndoe@gmail.com'); // Replace with dynamic data
  const [phoneNumber, setPhoneNumber] = useState('1234567890'); // Replace with dynamic data
  const [address, setAddress] = useState('123 Main St, Anytown, USA'); // Replace with dynamic data
  const [profilePicture, setProfilePicture] = useState<any>(null); // State for profile picture

  


    function handleChooseProfilePicture(event: GestureResponderEvent): void {
        throw new Error('Function not implemented.');
    }

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity onPress={handleChooseProfilePicture}>
        {profilePicture ? (
          <Image source={profilePicture} style={styles.profileImage} />
        ) : (
          <View style={styles.profilePlaceholder}>
            <Text style={styles.profilePlaceholderText}>Add Profile Picture</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Profile Information */}
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        editable={false} // Disable editing for username
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        editable={false} 
      />

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        editable={false} // Disable editing for phone number
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={[styles.input, { height: 80 }]} 
        multiline
        value={address}
        onChangeText={setAddress}
        editable={false} 
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profilePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePlaceholderText: {
    fontSize: 16,
    color: '#555',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default ProfilePage;
