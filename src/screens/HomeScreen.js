import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import TeamScore from "../components/TeamScore";
import ResetButton from "../components/ResetButton";

const HomeScreen = () => {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  const teamAName = "Team A";
  const teamBName = "Team B";

  const handleAddScore = (setTeam) => {
    setTeam((prevScore) => prevScore + 1);
  };

  const handleSubtractScore = (setTeam) => {
    setTeam((prevScore) => (prevScore > 0 ? prevScore - 1 : 0));
  };

  const resetScores = () => {
    setTeamA(0);
    setTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Score </Text>
      <TeamScore
        teamName={teamAName}
        score={teamA}
        onAdd={() => handleAddScore(setTeamA)}
        onSubtract={() => handleSubtractScore(setTeamA)}
      />
      <TeamScore
        teamName={teamBName}
        score={teamB}
        onAdd={() => handleAddScore(setTeamB)}
        onSubtract={() => handleSubtractScore(setTeamB)}
      />
      <ResetButton onReset={resetScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
});

export default HomeScreen;
