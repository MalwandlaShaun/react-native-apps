import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import ShoppingList from "./screens/ShoppingList";

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: "https://img.freepik.com/free-photo/empty-top-wooden-table-with-supermarket-blur-background_36051-467.jpg?w=2000",
      }}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <ShoppingList />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
