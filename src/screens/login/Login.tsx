import React, { useState } from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import InputField from "../../components/TextInput";
import { CustomButton } from "../../components/CustomButton";
import { Login as loginUser } from "../../api/methods";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleLogin = async () => {
    setLoading(true); // Set loading to true when login starts
    try {
      let body = {
        email: email,
        password: password,
      };
      const response = await loginUser(body);
      console.log("response", response);

      if (response.code === 200) {
        const token = response.data.token;
        await AsyncStorage.setItem('authToken', token);

        if (token) {
          console.log("Token has been set:", token);
          navigation.navigate("Home");
        } else {
          throw new Error("Token not found in response");
        }
      } else {
        Alert.alert("Login Failed", response.message);
      }
    } catch (error) {
      console.log("Login - error", error);
      Alert.alert("Login Error", error.message);
    } finally {
      setLoading(false); // Set loading to false after request is complete
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTextStyle}>Sign In</Text>
      </View>
      <InputField
        label="Email"
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <InputField
        label="Password"
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <CustomButton
        title="Sign In"
        onPress={handleLogin}
        loading={loading} // Pass the loading state
      />
      <View style={styles.MainSugnupView}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          style={styles.LoginBackTxt}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.SignUptext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
