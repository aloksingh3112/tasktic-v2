import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import colors from '../theme/color'
interface Props extends TextProps {
  variant?: 'primary' | 'secondary';
}

const Text: React.FC<Props> = ({ variant = 'primary', style, ...props }) => (
  <RNText style={[styles[variant], style]} {...props} />
);

const styles = StyleSheet.create({
  primary: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  secondary: {
    color: colors.textSecondary,
    fontSize: 14,
  },
});

export default Text;
