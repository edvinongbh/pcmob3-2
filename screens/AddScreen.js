import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export default function AddScreen({ route, navigation }) {
  const [text, setText] = useState("");

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.label}>Add your todo</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(newText) => setText(newText)}
      ></TextInput>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.button, styles.submitButton]}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ marginTop: 40, color: "grey" }}>
        This is what you typed:
      </Text>
      <Text style={{ color: "#333", marginTop: 10 }}>{text}</Text>
    </View>
  );
}
