import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Home = ({ navigation }) => {
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