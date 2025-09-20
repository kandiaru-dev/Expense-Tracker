import { Button } from "@react-navigation/elements";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
  interface Expenses {
    title: string;
    amount: number;
    date: string;
  }

  const [expenses, setExpenses] = useState<Expenses[]>([]);
  const [amount, setAmount] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const addExpense = () => {
    const newExpense: Expenses = {
      title: title,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString(),
    };
    setExpenses([newExpense, ...expenses]);

    setTitle("");
    setAmount("");
  };

  const totalAmount = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <View style={styles.container}>
      <Text>My Expence Tracker</Text>
      <Text>Total: ${totalAmount()}</Text>
      <TextInput
        style={styles.input}
        placeholder="Expense title..."
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="amout"
        value={amount}
        onChangeText={setAmount}
      />

      <Button onPress={addExpense}>Add Expense</Button>
      {expenses.map((expense, index) => {
        return (
          <View key={index} style={styles.expenseItem}>
            <Text>
              {expense.title} : ${expense.amount}
            </Text>
            <Text>{expense.date}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    padding: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  expenseItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});
