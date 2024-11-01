import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Text from '../ui-kit/Text';
import Card from '../ui-kit/Card';
import colors from '../theme/color';

const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <Text variant="primary" style={styles.welcomeText}>Welcome, John Taylor</Text>
    <View style={styles.stats}>
      <Card>
        <Text variant="primary">7/10 Tasks Completed</Text>
      </Card>
      <Card>
        <Text variant="primary">2/4 Goals Completed</Text>
      </Card>
    </View>
    <View style={styles.tasks}>
      <Text variant="primary" style={styles.sectionTitle}>Tasks</Text>
      <Card>
        <Text variant="primary">Attend Amina's Birthday</Text>
        <Text variant="secondary">Attend Amina's birthday party today. Pending | Low</Text>
      </Card>
      <Card>
        <Text variant="primary">Workout for 2 Hours</Text>
        <Text variant="secondary">Daily workout for 2 hours including cardio and weights. Pending | High | 5 days</Text>
      </Card>
      <Card>
        <Text variant="primary">15 Minute Meditation</Text>
        <Text variant="secondary">15 minutes of meditation daily. Pending | Medium | 7 days</Text>
      </Card>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  tasks: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default HomeScreen;
