import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TeamScore = ({ teamName, score, onAdd, onSubtract }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onSubtract}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  score: {
    fontSize: 48,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default TeamScore;
