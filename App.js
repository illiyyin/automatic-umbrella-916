import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeScreen = ({ navigation }) => {

  // useEffect(() => {
  //   console.log(navigation,null,2)
  // },[])
  
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Pergi ke Progate"
        onPress={() => {
          navigation.navigate('Progate', {
            name: 'Ninja Ken',
            language: 'React Native',
          })
        }}
      />
    </View>
  )
}

const ProgateScreen = ({route}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Progate, {route?.params?.name}!</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Progate" screenOptions={{
        animation:"none"
      }}>
        <Stack.Screen name="Progate" component={ProgateScreen} options={{
          // headerBackVisible: false,
          
        }} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
