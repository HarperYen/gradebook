import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import FirebaseFetcher from "@/components/FirebaseFetcher";
import FirebaseAddData from "@/components/FirebaseAddData";

export default function HomeScreen() {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    FirebaseAddData(input);

    setInput("");
  };

  return (
    <View>
      <FirebaseFetcher />

      <Text>Add new student name </Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text>Add student name</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: "red",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    padding: 16,
  },
});
