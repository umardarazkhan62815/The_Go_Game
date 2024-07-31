import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.splashText}>{"Go Game"}</Text>
    </View>
  );
};
export default Splash;