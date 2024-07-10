// AboutPage.tsx

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../App';

type AboutPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AboutPage'>;

type Props = {
  navigation: AboutPageNavigationProp;
};

const AboutPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>About Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AboutPage;
