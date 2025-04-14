import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpScreen = ({ goBack, onSignupSuccess }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>

      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={onSignupSuccess}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goBack} style={styles.link}>
        <Text style={styles.linkText}>Back to Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#fff' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#1e57f1' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#1e57f1',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  link: { alignItems: 'center' },
  linkText: { color: '#1e57f1', fontSize: 14 },
});

export default SignUpScreen;
