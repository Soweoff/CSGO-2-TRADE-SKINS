import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={{ padding: 20 }}>
      <Text>Página Inicial</Text>
      <Link href="/tela1">Ir para Tela 1</Link>
      <Link href="/tela2">Ir para Tela 2</Link>
      <Link href={`/param/${Math.floor(Math.random() * 100)}`}>
        Ir para tela com parâmetro
      </Link>
      <Link href="/com-botao">Ir para tela com botão</Link>
      <Link href="/tabs">Ir para Tabs</Link>
    </View>
  );
}
