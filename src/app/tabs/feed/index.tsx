import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Feed() {
  const router = useRouter();

  const posts = [
    { id: "1", title: "Post 1" },
    { id: "2", title: "Post 2" },
  ];

  return (
    <View style={{ padding: 20 }}>
      {posts.map((post) => (
        <Pressable
          key={post.id}
          onPress={() => router.push(`/tabs/feed/${post.id}`)}
          style={{ marginVertical: 10 }}
        >
          <Text style={{ fontSize: 16 }}>{post.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}
