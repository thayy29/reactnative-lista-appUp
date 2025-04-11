import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Participant from "../../../components/Participant";

export default function Home() {
  const handleOnPress = () => {
    console.log("Adicionou!");
  };

  const handleRemoveParticipant = (name: string) => {
    console.log("Removeu!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 11 de Abril de 2025</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor={"#525252"}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleOnPress}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant
        name="Thayana"
        onRemove={() => handleRemoveParticipant("Thayana")}
      />
    </View>
  );
}
