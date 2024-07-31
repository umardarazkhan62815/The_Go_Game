import React, { useState } from "react";
import { Text, View, Alert, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import InputField from "../../components/TextInput";
import { CustomButton } from "../../components/CustomButton";
import { SignUp as signUpUser } from "../../api/methods";

const SignUp = ({ navigation }: any) => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSignUp = async () => {
    setLoading(true); // Set loading to true when sign up starts
    try {
      let body = {
        email: email,
        password: password,
        first_name: fname,
        last_name: lname,
      };
      const response = await signUpUser(body);
      if (response.code === 200) {
        navigation.navigate("Home");
      } else {
        Alert.alert("Sign Up Failed", response.message);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to sign up. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after request is complete
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTextStyle}>Sign Up</Text>
      </View>
      <InputField
        label="First Name"
        placeholder="First Name"
        onChangeText={(text) => setfName(text)}
        value={fname}
      />
      <InputField
        label="Last Name"
        placeholder="Last Name"
        onChangeText={(text) => setlName(text)}
        value={lname}
      />
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
        title="Sign Up"
        onPress={handleSignUp}
        loading={loading} // Pass the loading state
      />
      <View style={styles.MainSugnupView}>
        <Text>Already have an account?</Text>
        <TouchableOpacity
          style={styles.LoginBackTxt}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.SignUptext}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
