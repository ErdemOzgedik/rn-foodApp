import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import ResultListItem from "./ResultListItem";
import { useNavigation } from "@react-navigation/native";

const ResultList = ({ results, header }) => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log(`render edildi ${header} `);
  });

  if (!results.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate({
                  name: "Detail",
                  params: { id: item.id },
                });
              }}
            >
              <ResultListItem item={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(result) => result.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default ResultList;
