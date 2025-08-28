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
        // keyExtractor={(item) => (item.id.toString())}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListEmptyComponent={() => 
          <View style={styles.errorTextContainer}>
            <Text style={styles.errorText}>No items found</Text>
          </View>
        }
        contentContainerStyle={{ flexGrow: 1 }}
        ListHeaderComponent={() => <Text style={styles.listHeader}>Pokemon Card Header</Text>}
        ListFooterComponent={() => <Text style={styles.listFooter}>Pokemon Card Footer</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingTop: 12
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
  },
  errorTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center"
  },
  errorText: {
    fontSize: 20,
  },
  listHeader: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  listFooter: {
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 12
  }
})