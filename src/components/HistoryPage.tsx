// HistoryPage.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      <Text style={styles.message}>Coming Soon!</Text>
      
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HistoryPage;
