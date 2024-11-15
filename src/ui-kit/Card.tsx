import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

type CardProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#292929',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
});
