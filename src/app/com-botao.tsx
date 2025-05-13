import { View, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ComBotao() {
  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Ir para Tela 2 com useRouter"
        onPress={() => router.push("/tela2")}
      />
    </View>
  );
}
