import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors} from '../../theme/colors';

export default function PhoneScreen({navigation}: any) {
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Enter Your{'\n'}Phone Number</Text>
      <Text style={styles.subtitle}>We'll send you a verification code</Text>

      <View style={styles.inputRow}>
        <View style={styles.flag}>
          <Text style={styles.flagText}>🇵🇰 +92</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="3XX XXXXXXX"
          keyboardType="phone-pad"
          maxLength={10}
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, !phone && styles.buttonDisabled]}
        disabled={!phone}
        onPress={() => navigation.navigate('OTP')}>
        <Text style={styles.buttonText}>Send OTP</Text>
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
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 12,
    marginBottom: 24,
    overflow: 'hidden',
  },
  flag: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  flagText: {
    fontSize: 15,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    paddingHorizontal: 14,
    fontSize: 16,
    color: colors.black,
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
});