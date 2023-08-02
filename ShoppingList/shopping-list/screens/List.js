import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const List = ({ items, removeItem, editItem }) => {
  const renderItem = ({ item }) => {
    const { id, title } = item;
    return (
      <View style={styles.groceryItem}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => editItem(id)} style={styles.editBtn}>
            <AntDesign name="edit" size={16} color=" hsl(125, 71%, 66%)" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => removeItem(id)}
            style={styles.deleteBtn}
          >
            <AntDesign name="delete" size={16} color="hsl(360, 71%, 66%)" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.groceryList}
    />
  );
};

const styles = StyleSheet.create({
  groceryList: {
    // marginTop: 20,
  },
  groceryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    color: "hsl(209, 61%, 16%)",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  editBtn: {
    padding: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "hsl(125, 71%, 66%)",
    borderRadius: 5,
  },
  deleteBtn: {
    padding: 8,
    borderWidth: 1,
    borderColor: "hsl(360, 71%, 66%)",
    borderRadius: 5,
  },
});

export default List;
