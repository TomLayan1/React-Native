import { FlatList, StyleSheet, Text, View } from "react-native";
import pokemonList from "../data.json"


export const RNList = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={pokemonList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.name}</Text>
              <Text style={styles.cardText}>{item.type}</Text>
            </View>
          )
        }}
        keyExtractor={(item) => (item.id.toString())}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
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
    // marginBottom: 16
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold"
  }
})