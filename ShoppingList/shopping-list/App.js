import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ShoppingList from "./screens/ShoppingList";
export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
