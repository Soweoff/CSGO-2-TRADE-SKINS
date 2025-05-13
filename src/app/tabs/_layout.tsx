import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="perfil" options={{ title: "Meu Perfil" }} />
      <Tabs.Screen name="feed/index" options={{ title: "Feed" }} />
    </Tabs>
  );
}
