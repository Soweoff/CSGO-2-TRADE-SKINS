import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Tela2() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Tela 2</Text>
      <Link href="/tela1">Voltar para Tela 1</Link>
    </View>
  );
}
