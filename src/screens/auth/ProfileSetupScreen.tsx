import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors} from '../../theme/colors';

export default function ProfileSetupScreen({navigation}: any) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Up{`\n`}Your Profile</Text>
      <Text style={styles.subtitle}>Tell us what name to show on Zouj</Text>

      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />

      <TouchableOpacity
        style={[styles.button, !name.trim() && styles.buttonDisabled]}
        disabled={!name.trim()}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Finish</Text>
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
    fontSize: 16,
    marginBottom: 24,
    paddingHorizontal: 18,
    paddingVertical: 14,
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
