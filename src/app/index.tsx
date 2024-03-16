import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';
import {gql, useLazyQuery} from '@apollo/client';

const query = gql`
query search($ingr: String) {
  search(ingr: $ingr) {
    text
    hints {
      food {
        label
        brand
        foodId
        nutrients {
          ENERC_KCAL
        }
      }
    }
  }
}`

const foodItems = [
  {label: "Pizza", cal: 75, brand: "Dominos"},
  {label: "Apple", cal: 50, brand: "Generic"},
  {label: "Coffee", cal: 100, brand: "Americano"},
]
export default function SearchScreen() {
  const [search, setSearch] = useState('');

  const [runSearch, {data, loading, error}] = useLazyQuery(query)

  const performSearch = () => {
    runSearch({variables: {ingr: search}});
    // setSearch('');
  }

  if (error) {
    return <Text>Error: {error.message}</Text>
  }

  console.log(JSON.stringify(data, null, 2))

  const items = data?.search?.hints || [];

  return (
    <View style={styles.container}>
      <TextInput value={search} onChangeText={setSearch} placeholder='Search food items' style={styles.input} />
      { search && <Button title='Search' onPress={performSearch} />}
        {loading && <ActivityIndicator />}
        <FlatList
        data={items}
        ListEmptyComponent={<Text>Search a food.</Text>}
        renderItem={({ item }) => <FoodListItem item={item} />}
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
    gap: 10,
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  }
});
