/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import MessageInput from './src/component/MessageInput';
import ChatScreen from './src/ChatScreen';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const onSubmit = () => {
    console.log('updated')
  }

  return  <ChatScreen />;;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
