import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is my App</Text>
      <Text style={styles.secondaryText}>hello world!</Text>
    </View>
  );
}
