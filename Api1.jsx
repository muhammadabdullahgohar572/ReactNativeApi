import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Api1 = () => {
  const [Api, setApi] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data1 = await res.json();
      setApi(data1);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <View style={{ margin: 30 }}>
        <Text style={{ fontSize: 30, fontWeight: "600" }}>Hello World</Text>

        {Api.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

const style = StyleSheet.create({});

export default Api1;
