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
        // marginTop: 40,
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
      listContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        
      },
     
      itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      itemText: {
        fontSize: 18,
      },
      detailsContainer: {
        padding: 20,
        backgroundColor: 'white',
      },
      detailsHeading: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      detailsText: {
        fontSize: 18,
        marginVertical: 5,
      },
      backButton: {
        marginTop: 20,
        backgroundColor: 'slateblue',
        padding: 10,
        borderRadius: 5,
      },
      backButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
      },
    });
