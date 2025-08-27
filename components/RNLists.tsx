import { StyleSheet, Text, View } from "react-native";
import pokemonList from "../data.json"


export const RNList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {pokemonList?.map(item => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.cardText}>{item.type}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12
  },
  cardContainer: {
    backgroundColor: "#dbd3d3ff"
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