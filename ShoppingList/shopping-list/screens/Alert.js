import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [list]);

  return (
    <View style={styles.alertContainer}>
      <Text
        style={[
          styles.alert,
          { backgroundColor: type === "success" ? "#d4edda" : "#f8d7da" },
        ]}
      >
        {msg}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    marginBottom: 10,
    height: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    fontSize: 12,
    borderRadius: 4,
    letterSpacing: 1,
    textTransform: "capitalize",
  },
});

export default Alert;
