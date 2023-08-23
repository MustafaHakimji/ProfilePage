import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ContextProvider from './src/Provider/ContextProvider';
import AppNavigation from './src/Navigation/AppNavigation';

const App = () => {
  return (
    <ContextProvider>
      <AppNavigation />
    </ContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
