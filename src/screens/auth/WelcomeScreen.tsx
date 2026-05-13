import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors} from '../../theme/colors';

export default function WelcomeScreen({navigation}: any) {
  return (
    <View style={styles.container}>

      {/* Logo */}
      <View style={styles.logoArea}>
        <Text style={styles.logo}>ZOUJ</Text>
        <Text style={styles.tagline}>Find Your Match</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonArea}>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Phone')}>
          <Text style={styles.primaryText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Phone')}>
          <Text style={styles.secondaryText}>Login</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 80,
  },
  logoArea: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    fontSize: 56,
    fontWeight: '800',
    color: colors.black,
    letterSpacing: 10,
  },
  tagline: {
    fontSize: 14,
    color: colors.gray,
    letterSpacing: 4,
    marginTop: 8,
  },
  buttonArea: {
    width: '100%',
    paddingHorizontal: 32,
    gap: 16,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: colors.white,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.black,
  },
  secondaryText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '700',
  },
});