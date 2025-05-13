import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#222" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen name="tela1" options={{ title: "Primeira Tela" }} />
      <Stack.Screen name="tela2" options={{ title: "Segunda Tela" }} />
      <Stack.Screen
        name="param/[id]"
        options={{ title: "Detalhes com Param" }}
      />
      <Stack.Screen
        name="com-botao"
        options={{ title: "Botão com Navegação" }}
      />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
}
