import {
  StyleSheet,
  Text,
  View,
  TextInput as RNTextInput,
} from "react-native";
import React from "react";

interface InputFieldProps {
  placeholder: string;
  onChangeText: (text: string) => void
  value: string;                  
  label: string;
}
const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  onChangeText,
  value,
  label,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        placeholder={placeholder}
        placeholderTextColor={"darkgrey"}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />
    </View>
  );
};
export default InputField;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  input: {
    width: "90%",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "500",
    borderWidth: 1,
    borderColor: "grey",
    marginTop: 5,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 7,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    width: "90%",
    alignSelf: "center",
  },
});