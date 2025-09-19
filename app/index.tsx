import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  interface Expences {
    title: string;
    amount: number;
    date: string;
  }

  const [expences, setExpences] = useState<Expences[]>([]);
  const [amount, setAmount] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text>My Expence Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Expence title..."
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="amout"
        value={amount}
        onChangeText={setAmount}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    padding: 20,
    justifyContent: "center",
  },
  input: {},
});
