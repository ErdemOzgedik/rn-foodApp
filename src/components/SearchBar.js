import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onChange, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather style={styles.searchIcon} name="search" size={40} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        autoCorrect={false}
        autoCapitalize="none"
        value={searchTerm}
        onChangeText={onChange}
        onEndEditing={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: "grey",
    borderRadius: 5,
    height: 50,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  searchIcon: {
    marginHorizontal: 10,
    alignSelf: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
