import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import yelp from "../api/yelp";

const DetailScreen = ({ route }) => {
  const [result, setResult] = useState({});
  const ID = route.params.id;

  const getRestourant = async (ID) => {
    await yelp
      .get(`/${ID}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    getRestourant(ID);
  }, []);

  if (!result) return null;

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => {
          return photo;
        }}
        renderItem={({ item }) => {
          return <Image style={styles.img} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 200,
  },
});

export default DetailScreen;
