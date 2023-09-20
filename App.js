import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Icon from './assets/favicon.png'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.marginBottom20}>Home Screen</Text>
      <Button
        style={styles.button}
        title="Pergi ke Progate"
        onPress={() => {
          navigation.navigate('Progate')
        }}
      />
    </View>
  )
}

const ProgateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Progate</Text>
      <Text style={styles.marginBottom20}>Ayo belajar!</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  )
}


const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{

      }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }) => (
              // <Text style={[styles.icon, { backgroundColor: color }]}>Icon Home {JSON.stringify(color)}</Text>
              <Image source={Icon} />
            ),
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'red'
          }}
        />
        <Tab.Screen
          name="Progate"
          component={ProgateScreen}
          options={{
            tabBarIcon: () => (
              <Text style={styles.icon}>Icon Progate</Text>
            ),
            tabBarShowLabel: false
          }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 100,
    height: 32,
  },
  marginBottom20: {
    marginBottom: 20,
  },
});
