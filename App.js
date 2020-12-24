import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen'; // <-- import it
import { Card } from 'react-native-paper';


// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn); // it's good to explicitly catch and inspect any error

export default function App() {
  React.useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 5000); // <-- Set this to `5000` ms to hide it after 5 seconds
  }, []);

  return (
    <WebView
      style={{ marginTop: 0 }}
      source={{ uri: 'https://socialdate.space/' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff1f1ff',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});