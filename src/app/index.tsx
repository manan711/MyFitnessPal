import { FlatList, StyleSheet, Text, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';

const foodItems = [
  {label: "Pizza", cal: 75, brand: "Dominos"},
  {label: "Apple", cal: 50, brand: "Generic"},
  {label: "Coffee", cal: 100, brand: "Americano"},
]
export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={foodItems}
        renderItem={({ item }) => {
          console.log('Rendering item:', item);
          return <FoodListItem item={item} />; // Add return statement
        }}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
