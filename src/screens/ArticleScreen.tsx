import React, {useEffect, useState} from "react";
import {StyleSheet, SafeAreaView, Text} from "react-native";
/* components */
/* types */
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/navigation";
import {RouteProp} from "@react-navigation/native";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Article">;
  route: RouteProp<RootStackParamList, "Article">;
};

export const ArticleScreen: React.FC<Props> = ({navigation, route}: Props) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Article Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
