import React, { FC } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

interface IProps {
  onPress: () => void;
  title: string;
  btnStyle?: StyleProp<ViewStyle>;
  btnTextStyle?: StyleProp<TextStyle>;
  loading?: boolean;
}

export const CustomButton: FC<IProps> = ({
  onPress,
  title,
  btnStyle,
  btnTextStyle,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, btnStyle]}
      onPress={loading ? undefined : onPress} // Disable onPress when loading
      disabled={loading} // Disable button when loading
    >
      {loading ? (
        <ActivityIndicator color={"white"} size="small" style={styles.loader} />
      ) : (
        <Text style={[styles.btnTxt, btnTextStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "slateblue",
    paddingHorizontal: 50,
    borderRadius: 10,
    justifyContent: "center",
    paddingVertical: 10,
    alignSelf: "center",
    marginTop: 30,
    width: 200, // Fixed width
    height: 50, // Fixed height
  },
  btnTxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  loader: {
    justifyContent: "center",
    alignItems: "center",
 // Position the loader at the top of the button
     // Position the loader absolutely
  },
});
