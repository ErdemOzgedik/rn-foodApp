import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

const ResultListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: item.image_url,
        }}
      />

      <Text style={styles.title}>{item.name}</Text>
      <Text>
        {item.rating} Starts, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 5,
    marginLeft: 15,
    height: 200,
  },
  img: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResultListItem;
