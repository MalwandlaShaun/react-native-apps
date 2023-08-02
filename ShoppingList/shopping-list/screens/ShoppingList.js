import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import List from "./List";
import Alert from "./Alert";
//import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  //   useEffect(() => {
  //     getList();
  //   }, []);

  //   useEffect(() => {
  //     saveList();
  //   }, [list]);

  //   const getList = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:4000/list");
  //       setList(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log("Error fetching list:", error);
  //     }
  //   };

  //   const saveList = async () => {
  //     console.log(list);

  //     try {
  //       await axios.post("http://localhost:4000/list", list);
  //       console.log(list);
  //     } catch (error) {
  //       console.log("Error saving list:", error);
  //     }
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please enter a value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      showAlert(true, "Item changed", "success");
    } else {
      showAlert(true, "Item added", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
    }
    setName("");
    setEditID(null);
    setIsEditing(false);
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearItems = () => {
    showAlert(true, "Empty list", "danger");
    setList([]);
  };

  const removeAlert = () => {
    showAlert(false, "", "");
  };

  const editItem = (id) => {
    setIsEditing(true);
    const edit = list.find((item) => item.id === id);
    setName(edit.title);
    setEditID(id);
  };

  const removeItem = (id) => {
    showAlert(true, "Item removed", "danger");
    const newItems = list.filter((item) => {
      return item.id !== id;
    });
    setList(newItems);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.sectionCenter}>
        {alert.show && (
          <Alert list={list} removeAlert={removeAlert} {...alert} />
        )}
        <View style={styles.groceryForm}>
          <Text style={styles.heading}>Shopify list</Text>
          <View style={styles.formControl}>
            <TextInput
              placeholder="e.g. eggs"
              style={styles.grocery}
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
              <Text style={styles.submitText}>
                {isEditing ? "Edit" : "Submit"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {list.length > 0 && (
          <View style={styles.groceryContainer}>
            <List editItem={editItem} removeItem={removeItem} items={list} />
            <TouchableOpacity style={styles.clearBtn} onPress={clearItems}>
              <Text style={styles.clearText}>Clear items</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  sectionCenter: {
    backgroundColor: "rgba(255, 255, 255, 0.459)",
    paddingTop: 40,

    borderRadius: 4,
    //boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    //    marginTop: 8,
  },
  groceryForm: {
    marginBottom: 20,
  },
  heading: {
    color: "hsl(205, 86%, 17%)",
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
  },
  formControl: {
    flexDirection: "row",
    justifyContent: "center",
  },
  grocery: {
    padding: 4,
    paddingLeft: 16,
    width: "60%",
    backgroundColor: "hsl(210, 36%, 96%)",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderColor: "transparent",
    fontSize: 16,
    flex: 1,
    color: "hsl(210, 22%, 49%)",
  },
  submitBtn: {
    backgroundColor: "hsl(205, 86%, 81%)",
    borderColor: "transparent",
    flex: 0,
    display: "flex",
    alignItems: "center",
    padding: 4,
    textTransform: "capitalize",
    letterSpacing: 2,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    cursor: "pointer",
    transition: "all 0.3s linear",
  },
  submitText: {
    fontSize: 14,
    color: "hsl(205, 78%, 60%)",
  },
  groceryContainer: {
    marginTop: 20,
    paddingHorizontal: "20%",
  },
  clearBtn: {
    textTransform: "capitalize",
    width: 100,
    height: 24,

    alignSelf: "center",
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: "hsl(360, 71%, 66%)",

    fontSize: 14,
    letterSpacing: 1,
    transition: "all 0.3s linear",
    marginTop: 20,
    marginBottom: 20,
  },
  clearText: {
    color: "hsl(360, 71%, 66%)",
  },
});

export default App;
