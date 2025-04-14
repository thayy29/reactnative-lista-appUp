import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "./styles";
import Participant from "../../../components/Participant";

export default function Home() {
  const participants = [
    "Thayana",
    "Ana",
    "João",
    "Maria",
    "Pedro",
    "Mariana",
    "Lucia",
    "Patricia",
    "Marcos",
  ];

  function handleParticipanAdd() {
    if (participants.includes("Thayana")) {
      return Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com esse nome."
      );
    }

    console.log("adicionou");
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => console.log("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent style="dark" />
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 11 de Abril de 2025</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor={"#525252"}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipanAdd}>
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%" }}>
        <FlatList
          data={participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant
              name={item}
              key={item}
              onRemove={() => handleRemoveParticipant(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista
            </Text>
          )}
        />
      </View>
    </View>
  );
}
