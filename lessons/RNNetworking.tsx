import { useEffect, useState } from "react";
import { 
  ActivityIndicator,
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
  const [isLoading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchData = async(limit = 10) => {
    setLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await response.json();
    if (data) {
      setPosts(data)
    }
    setLoading(false);
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false)
  }

  if (isLoading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.loadingContainer} edges={["top", "left", "right"]}>
          <ActivityIndicator size={"large"} />
          <Text>Loading...</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
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
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
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