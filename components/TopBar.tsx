import React from 'react'
import { SafeAreaView, View, TouchableOpacity, StyleSheet } from 'react-native'

export default function TopBar() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.leftButtonsContainer}>
          <TouchableOpacity style={styles.friendsButton}></TouchableOpacity>
          <TouchableOpacity
            style={styles.notificationButton}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.profileButton}></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  leftButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  friendsButton: { width: 50, height: 50, borderRadius: 20, borderWidth: 1 },
  notificationButton: {
    width: 50,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
  },
  profileButton: { width: 50, height: 50, borderRadius: 20, borderWidth: 1 },
})
