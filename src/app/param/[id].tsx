import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ParamScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ padding: 20 }}>
      <Text>ID recebido: {id}</Text>
    </View>
  );
}
