import React, { useEffect, useState } from 'react';
import { View, StatusBar } from 'react-native';


import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import AccountScreen from './src/screens/AccountScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen'; 

const App = () => {
  const [screen, setScreen] = useState('splash');

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen('onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const renderScreen = () => {
    switch (screen) {
      case 'splash':
        return <SplashScreen />;
      case 'onboarding':
        return <OnboardingScreen onDone={() => setScreen('account')} />;
      case 'account':
        return (
          <AccountScreen
            onLogin={() => setScreen('login')}
            onSignup={() => setScreen('signup')}
          />
        );
      case 'signup':
        return (
          <SignUpScreen
            goBack={() => setScreen('account')}
            onSignupSuccess={() => setScreen('home')} 
          />
        );
      case 'login':
        return (
          <LoginScreen
            goBack={() => setScreen('account')}
            onLoginSuccess={() => setScreen('home')} 
          />
        );
      case 'home':
        return <HomeScreen />; 
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#1e57f1" />
      {renderScreen()}
    </View>
  );
};

export default App;
