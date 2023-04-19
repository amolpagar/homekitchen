import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import MenuScreen from '../Menus/MenuScreen';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <MenuScreen />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar
          placeholder="Search..."
          lightTheme={true}
          round={true}
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.searchBarInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuContainer: {
    flex: 1,
  },
  searchBarContainer: {
    position: 'absolute',
    bottom: 20,
    left: '10%',
    right: '10%',
    backgroundColor: '#fff', 
    borderRadius: 10      
  },
  searchBar: {
    backgroundColor: '#111',
    borderTopWidth: 0,
    borderBottomWidth: 0,    
  },
  searchBarInput: {
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
