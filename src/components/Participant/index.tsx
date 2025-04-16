import react from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../Participant/styles";

type Props = {
  name: string;
  onRemove: () => void;
};

export default function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.icon} onPress={onRemove}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
}
