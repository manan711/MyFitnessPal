import {View, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const FoodLogListItem = ({item}) => {
    return (
      <View style={{
        backgroundColor: '#f6f6f8',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <View style={{flex: 1, gap: 5}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.label}</Text>
        <Text style={{color: 'dimgray'}}>{item.kcal} cal</Text>
        </View>
      </View>
    );
  }

  export default FoodLogListItem;