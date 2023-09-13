import React, { useEffect } from 'react'
import { View, Text, Linking, Platform, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ApolloProvider } from '@apollo/client';
import GraphClient from './Source/Data/GraphClient';
//-------------Screens-------------
import SplashScreen from './Source/Screens/SplashScreen';
import HomeScreen from './Source/Screens/HomeScreen';
import ArticleDetailScreen from './Source/Screens/ArticleDetailScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <ApolloProvider client={GraphClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ArticleDetailScreen" component={ArticleDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});
