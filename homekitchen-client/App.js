import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home/HomeScreen';


export default function App() {
  return (
    <View style={styles.container}>
        {/* <NavigationContainer>        
            <MainDrawerNavigator />
          </NavigationContainer> */}
          <HomeScreen />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1   
  },
});
