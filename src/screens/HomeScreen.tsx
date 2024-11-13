import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Card from '../ui-kit/Card';
import Text from '../ui-kit/Text';
import Button from '../ui-kit/Button';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text size={20}>Welcome</Text>
        <Text size={24} style={styles.userName}>John Taylor</Text>
      </View>
      <Card style={styles.progressCard}>
        <Text size={18}>7/10 Tasks Completed</Text>
        <Text size={18}>2/4 Goals Completed</Text>
      </Card>
      <Text size={20} style={styles.sectionTitle}>Tasks</Text>
      <Card>
        <Text size={16}>Attend Amina’s Birthday</Text>
        <Text size={14} color="#888">Attend Amina's birthday party today.</Text>
      </Card>
      <Card>
        <Text size={16}>Workout for 2 Hours</Text>
        <Text size={14} color="#888">Daily workout for 2 hours including cardio and weights.</Text>
      </Card>
      <Button title="Add Task" onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  userName: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  progressCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    marginVertical: 15,
  },
});
