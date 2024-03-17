import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

const BasicComponent = () => {
  const [value, setvalue] = useState("");
  const [todo, setTodo] = useState([]);
  const test = () => {
    if (value !== "") {
      setTodo([...todo, value]);
      setvalue("");
    } else {
      alert("fill");
    }
  };
  return (
    <>
      <View
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <View style={{ borderWidth: 2, borderColor: "black" }}>
          <TextInput
            placeholder="Enter a Name"
            onChangeText={(text) => setvalue(text)}
            value={value}
            style={{ padding: 5 }}
          />
        </View>

        <View style={{ color: "red" }}>
          <Button title="Click Me" color="red" onPress={test} />
        </View>
      </View>
      <ScrollView style={{ marginTop: 20 }}>
        {todo.map((item, index) => (
          <View
            key={index}
            style={{
              borderColor: "black",
              marginTop: 20,
              borderWidth: 1,
              alignItems: "center",
              padding: 5,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "700" }}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default BasicComponent;
