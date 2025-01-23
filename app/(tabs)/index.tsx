import React from 'react'
import { StyleSheet, View } from 'react-native'
import SearchBar from '../../components/SearchBar'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Other components can go here */}
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Ensures the SearchBar is at the bottom
  },
})
