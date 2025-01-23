import React from 'react'
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native'

export default function SearchBar() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={require('@/public/profile-placeholder.svg')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 10,
  },
  searchInput: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
})
