import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headingContainer: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "slateblue",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 50,
  },
  headingTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  LoginBackTxt: {
    alignSelf: "center",
    marginLeft: 5,
   fontWeight: "bold",
  },
  MainSugnupView: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10
  },
  SignUptext:{
    fontSize: 14,
    fontWeight: "bold",
  }
});