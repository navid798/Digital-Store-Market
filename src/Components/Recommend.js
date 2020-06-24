import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import RecommendResult from "./RecommendResult";

const Recommend = ({ title, result }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>

      <FlatList
        data={result}
        keyExtractor={result => result.id.toString()}
        horizontal
        renderItem={({ item }) => <RecommendResult item={item} />}
      />
    </View>
  );
};

export default Recommend;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    //fontWeight: "bold",
    fontFamily: "Sans",
    marginRight: 12,
  },
  FlatList: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderColor: "red",
    borderWidth: 1,
  },
});
