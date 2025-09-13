import { useEffect, useState } from "react";
import { 
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
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
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [postTitle, setPostTitle] = useState<string>("");
  const [postBody, setPostBody] = useState<string>("");
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // GET REQUEST
  const fetchData = async(limit = 10) => {
    try {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const data = await response.json();
      if (data) {
        setPosts(data)
      }
    }
    catch(error) {
      console.log("Fetching error: ", error);
      setError("Error fetching posts");
    }
    finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  // POST REQUEST
  const handleDataPosting = async() => {
    try {
      setIsPosting(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody
        })
      })
  
      const newPost = await response.json();
      setPosts([newPost, ...posts]);
      setPostTitle("");
      setPostBody("");
    }
    catch(error) {
      console.error("Posting error", error);
      setError("Error posting")
    }
    finally{
      setIsPosting(false);
    }
  }
  
  // TO REFRESH
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  }

  // LOADING COMOPONENT
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
        {error ? (
            <View style={styles.errorContainer}>
              <Text style={{ fontSize: 18, backgroundColor: "pink", borderColor: "red", padding: 20, textAlign: "center" }}>{error}</Text>
            </View>
          ) : (
            <>
              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  <Text>Title</Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder="Enter a title"
                    value={postTitle}
                    onChangeText={setPostTitle}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text>Body</Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder="Enter body"
                    value={postBody}
                    onChangeText={setPostBody}
                  />
                </View>
                <Pressable style={styles.postBtn} onPress={handleDataPosting} disabled={isPosting}>
                  <Text style={styles.btnText}>{isPosting ? "Posting..." : "Post content"}</Text>
                </Pressable>
              </View>
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
            </>
          )}
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
  },
  formContainer: {
    backgroundColor: "white",
    marginBottom: 20,
    padding: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 13
  },
  inputContainer: {
    marginBottom: 20
  },
  formInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#7b7575ff",
    padding: 10,
    borderRadius: 7
  },
  postBtn: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 7
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold"
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center"
  }
})