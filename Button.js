import React, { Component } from "react";
import { TouchableOpacity } from "react-native-web";
import { View, StyleSheet, Text } from "react-native";

export class CustomButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => alert("hello!")}>
          <View style={styles.button}>
            <Text>EXAMPLE!!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    backgroundColor: "green",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
