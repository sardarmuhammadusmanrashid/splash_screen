import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors} from '../../theme/colors';

export default function OTPScreen({navigation}: any) {
  const [code, setCode] = useState('');
  const isComplete = useMemo(() => code.length === 6, [code]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your{`\n`}Phone Number</Text>
      <Text style={styles.subtitle}>Enter the 6-digit code sent to you</Text>

      <TextInput
        style={styles.input}
        placeholder="000000"
        keyboardType="number-pad"
        maxLength={6}
        value={code}
        onChangeText={setCode}
        textContentType="oneTimeCode"
      />

      <TouchableOpacity
        style={[styles.button, !isComplete && styles.buttonDisabled]}
        disabled={!isComplete}
        onPress={() => navigation.replace('ProfileSetup')}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Change phone number</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 32,
    paddingTop: 80,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.black,
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray,
    marginTop: 10,
    marginBottom: 40,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 12,
    color: colors.black,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 10,
    marginBottom: 24,
    paddingHorizontal: 18,
    paddingVertical: 14,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  link: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
    marginTop: 24,
    textAlign: 'center',
  },
});
