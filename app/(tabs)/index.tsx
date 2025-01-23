import React from 'react'
import { StyleSheet, View } from 'react-native'
import TopBar from '@/components/TopBar'
import SearchBar from '@/components/SearchBar'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TopBar />
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
