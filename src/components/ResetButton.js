import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ResetButton = ({ onReset }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onReset}>
      <Text style={styles.buttonText}>Reset</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#dc3545",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});

export default ResetButton;
