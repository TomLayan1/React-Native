import { FlatList, StyleSheet, Text, View } from "react-native";
import pokemonList from "../data.json"


export const RNList = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={pokemonList}
        renderItem={({ item }) => {
          console.log(item.id)
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.name}</Text>
              <Text style={styles.cardText}>{item.type}</Text>
            </View>
          )
        }}
        keyExtractor={(item) => (item.id.toString())}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10
  },
  card: {
    padding: 14,
    borderWidth: 2,
    borderRadius: 14,
    marginBottom: 10
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold"
  }
})