import { useEffect, useState } from "react";
import { 
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView
} from "react-native-safe-area-context";

type PostType = {
  id: number,
  title: string,
  body: string
}

export const RNNetworking = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null);
  console.log("Fetched posts", posts)

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const data = await response.json();
      if (data) {
        setPosts(data)
      }
    }

    fetchData();
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={posts}
          renderItem={({ item }) => {
            return (
              <View style={styles.postCard}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </View>
            )
          }}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
          ListHeaderComponent={() => <Text style={styles.header}>Fetched Posts</Text>}
          ListFooterComponent={() => <Text style={styles.header}>End of list</Text>}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  header: {
    color: "green",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 14
  },
  postCard: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14
  },
  body: {
    fontSize: 16,
    lineHeight: 20
  }
})