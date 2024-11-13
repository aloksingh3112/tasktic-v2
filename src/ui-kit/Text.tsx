import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';

type CustomTextProps = TextProps & {
  children: React.ReactNode;
  size?: number;
  color?: string;
};

export default function Text({ children, size = 16, color = '#FFF', ...props }: CustomTextProps) {
  return (
    <RNText style={[styles.text, { fontSize: size, color }]} {...props}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'System',
  },
});
