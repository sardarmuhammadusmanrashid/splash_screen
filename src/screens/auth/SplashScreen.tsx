import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export default function SplashScreen({navigation}: any) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ZOUJ</Text>
      <Text style={styles.tagline}>Find Your Match</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 64,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: 10,
  },
  tagline: {
    fontSize: 16,
    color: colors.white,
    letterSpacing: 4,
    marginTop: 10,
    opacity: 0.85,
  },
});