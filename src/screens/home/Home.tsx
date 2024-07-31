import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { GetAllUser as fetchUsersApi } from "../../api/methods";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // State to hold selected user

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetchUsersApi();
      console.log("fetch user response ==>", JSON.stringify(response, null, 2));
      setUsers(response.data); // Update the users state with the fetched data
    } catch (error) {
      console.error("error ===>", JSON.stringify(error.response, null, 2));
    }
  };

  const handleUserPress = (user) => {
    setSelectedUser(user);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleUserPress(item)}
    >
      <Text style={styles.itemText}>{item.first_name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTextStyle}>Users</Text>
      </View>
      {selectedUser ? (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsHeading}>User Details</Text>
          <Text style={styles.detailsText}>First Name: {selectedUser.first_name}</Text>
          <Text style={styles.detailsText}>Last Name: {selectedUser.last_name}</Text>
          <Text style={styles.detailsText}>Email: {selectedUser.email}</Text>
          {/* Add more details if available */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setSelectedUser(null)} // Clear the selected user
          >
            <Text style={styles.backButtonText}>Back to Users List</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={users} // Pass the users state to the FlatList component
          renderItem={renderItem}
          keyExtractor={(item) => item.id ? item.id.toString() : item.email} 
          contentContainerStyle={styles.listContainer}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
