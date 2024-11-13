import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  title: string;
};

export default function Button({ onPress, title }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1F1F1F',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
});
