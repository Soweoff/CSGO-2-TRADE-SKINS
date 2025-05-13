import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Tela1() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Tela 1</Text>
      <Link href="/tela2">Ir para Tela 2</Link>
    </View>
  );
}
