import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HelpPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HelpPage'>;
type Props = {
  navigation: HelpPageNavigationProp;
};
const HelpPage = () => {
  const [documentation, setDocumentation] = useState('');

  const handleSubmit = () => {
    // Implement your submission logic here
    console.log('Submitted documentation:', documentation);
    // You can add further logic such as sending data to backend, etc.
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Help Massege</Text>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Write your problem. We will try to solve...."
          value={documentation}
          onChangeText={setDocumentation}
        />
        <Button title="Submit " onPress={handleSubmit} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.contactText}>Contact Us:</Text>
        <Text>Email: contact@example.com</Text>
        <Text>Phone: +1234567890</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HelpPage;
