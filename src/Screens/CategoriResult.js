import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoriResultComponent from "../Components/Categori/CategoriResultComponent";
import { useRoute } from "@react-navigation/native";

const CategoriResult = () => {
  const route = useRoute();
  const data = route.params.data;
  //console.log(data);
  const allproduct = data.map(res => {
    return res.digital_store_markets;
  });
  const CustomData = allproduct.find(res => {
    return res;
  });

  //console.log(cd);
  return (
    <View>
      <FlatList
        data={CustomData}
        keyExtractor={CustomData => CustomData.id.toString()}
        renderItem={({ item }) => {
          return <CategoriResultComponent item={item} />;
        }}
      />
    </View>
  );
};
export default CategoriResult;

const styles = StyleSheet.create({});