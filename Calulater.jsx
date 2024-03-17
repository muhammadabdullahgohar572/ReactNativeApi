import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    const res = parseFloat(num1) + parseFloat(num2);
    setResult(res.toString());
  };

  const subtract = () => {
    const res = parseFloat(num1) - parseFloat(num2);
    setResult(res.toString());
  };

  const multiply = () => {
    const res = parseFloat(num1) * parseFloat(num2);
    setResult(res.toString());
  };

  const divide = () => {
    const res = parseFloat(num1) / parseFloat(num2);
    setResult(res.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={num1}
        onChangeText={(text) => setNum1(text)}
        placeholder="Enter number 1"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={num2}
        onChangeText={(text) => setNum2(text)}
        placeholder="Enter number 2"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <View style={{ flexDirection: "column" }}>
          <View style={{ marginTop: 20 }}>
            <Button title="Add" onPress={add} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button title="Subtract" onPress={subtract} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button title="Multiply" onPress={multiply} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Button title="Divide" onPress={divide} />
          </View>
        </View>
      </View>
      {result !== "" && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    marginBottom: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Calculator;
