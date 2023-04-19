import React, { useState, useEffect } from 'react';
import { View, Text, Image, Platform, Dimensions, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
var { width } = Dimensions.get("window");
width = Platform.OS === 'web' ? '10%' : '25%';

const MenuData = [
  { id: 1, image: 'https://cdn.pixabay.com/photo/2021/09/25/18/54/dish-6655595_1280.jpg', name: 'chicken biryani', description: 'Hyderabadi dum biryani' },
  { id: 2, image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg', name: 'Goat Biryani', description: 'Hyderabadi dum biryani' },
  { id: 3, image: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg', name: 'Fish Fry', description: 'Hyderabadi Fish Fry' },
  { id: 4, image: 'https://static.toiimg.com/thumb/53096628.cms?imgsize=104874&width=800&height=800', name: 'biryani', description: 'Hyderabadi dum biryani' }

];

const MenuCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="heart" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="cart-plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const MenuScreen = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    // axios.get('https://example.com/api/menus')
    //   .then(response => {
    //     setMenus(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    setMenus(MenuData);
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        data={menus}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MenuCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#111',
    padding: 10,

  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginLeft: '10%',
    marginRight: '10%',    
  },
  imageContainer: {
    width: width,
    height: 100,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 10,    
  },
  icon: {
    marginRight: 10,
  },
});

export default MenuScreen;
