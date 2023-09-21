import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useFocusEffect,useIsFocused  } from '@react-navigation/native';

const Home = ({ navigation }) => {
  const [count, setCount] = React.useState(0)
  const [countFocus, setCountFocus] = React.useState(0)
  const isFocused = useIsFocused();
  
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      // The screen is focused
      // Call any action
      setTimeout(() => {
        
        setCount(prev=>prev+1)
      },2000)
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      setTimeout(() => { 

        setCountFocus(prev=>prev+1)
      },2000)
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const call = () => {
        
  //       // setCount(prev=>prev+1)
  //       console.log(new Date().getSeconds())
  //     }
  //     return call
  //   },[count])
  // );
  return (
    <View style={styles.container}>
      <Button
        title="Pergi ke Progate Event"
        onPress={() => {
          navigation.navigate("Progate", { screen: "Progate Event" })
        }}
      />
      <Button
        title="Pergi ke Progate Service (index ke 0 Tabs)"
        onPress={() => {
          navigation.navigate("Progate")
        }}
      />
      <Text style={styles.marginVertical20}>atau</Text>
      <Button
        title="Hubungi Kami"
        onPress={() => navigation.navigate('Contact')}
      />
      <Text>Current count = {count}</Text>
      <Text>Current Focus = {countFocus}</Text>
      <Text>{isFocused ? 'focused' : 'unfocused'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginVertical20: {
    marginVertical: 20,
  },
})

export default Home