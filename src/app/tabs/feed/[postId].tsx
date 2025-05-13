import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function PostDetail() {
  const { postId } = useLocalSearchParams();

  return (
    <View style={{ padding: 20 }}>
      <Text>Detalhes do Post: {postId}</Text>
    </View>
  );
}
