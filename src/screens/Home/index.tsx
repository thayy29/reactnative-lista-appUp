import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Home() {
   
  const handleOnPress = () => {
    console.log("Adicionou!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is my App</Text>
      <Text style={styles.secondaryText}>Adicione um participante!</Text>
      <View style={styles.box}>
        <TextInput
        placeholder="Escreva o nome de um participante"
        style={styles.textInput}
        />

        <TouchableOpacity style={styles.btnText} onPress={handleOnPress}>
            <Text>+</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
