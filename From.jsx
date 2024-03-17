import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Api = () => {
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <View style={{ marginTop: 50 }}>
          <View style={{ marginHorizontal: 50 }}>
            <Text
              style={{ fontSize: 20, fontWeight: "800", paddingBottom: 10 }}
            >
              First Name
            </Text>
            <View style={{ borderColor: "black", borderWidth: 2, width: 150 }}>
              <TextInput
                placeholder="Please Fill name"
                style={{ padding: 5, width: "100%" }}
              />
            </View>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={{ marginHorizontal: 50 }}>
            <Text
              style={{ fontSize: 20, fontWeight: "800", paddingBottom: 10 }}
            >
              last name
            </Text>
            <View style={{ borderColor: "black", borderWidth: 2, width: 150 }}>
              <TextInput
                placeholder="   last name"
                style={{ padding: 5, width: "100%" }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <Button title="Submit" />
        </View>
      </View>
    </>
  );
};

const Style = StyleSheet.create({});
export default Api;
