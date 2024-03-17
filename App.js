import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Calculator from "./Calulater";
import BasicComponent from "./Logm";
import Api from "./From";
import Api1 from "./Api1";

export default function App() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const onAddTodo = () => {
    if (!value == "") {
      setTodo([
        // ...todo,
        value,
      ]);
      setValue("");
      // alert("Item added successfully!");
    }
    else{
      alert("fill  data")
    }
  };
  return (
    <>

<Api1/>

{/* <Api/> */}



{/* <BasicComponent/> */}






      {/* <View style={{ padding: 40, marginTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ borderWidth: 2, borderColor: "black" }}>
            <TextInput
              onChangeText={(text) => setValue(text)}
              value={value}
              placeholder="Please Enter a name"
              style={{ padding: 10 }}
            />
          </View>

          <View>
            <Button title="Click Me" onPress={onAddTodo} />
          </View>
        </View>

        <View>
          <Text style={{ fontSize: 20, marginTop: 5, fontWeight: "700" }}>
            Your To-Do List:
          </Text>
          {todo.map((item) => (
            <View
              key={item}
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
        </View>
      </View> */}


       {/* <Calculator/> */}





      {/* <View style={styles.container}>
        <Text>hello</Text>
        <View style={styles.button}>
          <Button style={styles.btn1} title="Submit Me " />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Enter a First Number" />
        </View>
      </View>  */}

      {/* flex  box */}

      {/* <View style={styles.mainflex}>
        <View
          style={{ width: 100, flex: 1, height: 100, backgroundColor: "blue" }}
        >
          <Text>1</Text>
        </View>

        <View
          style={{ width: 100, flex: 1, height: 100, backgroundColor: "red" }}
        >
          <Text>3</Text>
        </View>

        <View
          style={{
            width: 100,
            flex: 1,
            height: 100,
            backgroundColor: "yellow",
          }}
        >
          <Text>2</Text>
        </View>
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  // mainflex: {
  //   // margin: 20,
  //   justifyContent: "center",
  //   marginTop: 50,
  //   display: "flex",
  //   flexDirection: "row",
  //   height: 600,
  //   alignItems: "center",
  //   borderColor:'green',
  //   borderWidth:2
  // },
  // input: {
  //   borderWidth: 2,
  //   borderColor: "block",
  //   padding: 10,
  //   marginTop: 50,
  // },
  // container: {
  //   flex: 1,
  //   textAlign: "center",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   fontSize: 660,
  //   fontWeight: "700",
  //   paddingBottom: 60,
  // },
  // btn1: {
  //   padding: 40,
  //   cursor: "pointer",
  // },
  // button: {
  //   borderColor: "yellow",
  //   borderWidth: 5,
  //   marginTop: 20,
  // },
});
