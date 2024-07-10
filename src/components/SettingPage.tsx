// SettingPage.tsx

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../App';

type SettingPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SettingPage'>;

type Props = {
  navigation: SettingPageNavigationProp;
};

const SettingPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Setting Page</Text>
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

export default SettingPage;
