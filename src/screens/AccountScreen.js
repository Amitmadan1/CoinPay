import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const AccountScreen = ({ onLogin, onSignup }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/891/891419.png', 
        }}
        style={styles.logo}
      />

      <Text style={styles.title}>Create your CoinPay account</Text>
      <Text style={styles.subtitle}>
        Sign up now to start exploring everything CoinPay has to offer.
      </Text>

      <TouchableOpacity style={styles.signupButton} onPress={onSignup}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By continuing, you agree to our Terms and Conditions and Privacy Policy.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
    borderRadius: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
    color: '#1e57f1',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#1e57f1',
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 16,
    alignItems: 'center',
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#1e57f1',
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 24,
    alignItems: 'center',
  },
  loginText: {
    color: '#1e57f1',
    fontSize: 16,
    fontWeight: '600',
  },
  termsText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default AccountScreen;
