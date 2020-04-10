import React, {useEffect, useState} from "react";
import {StyleSheet, SafeAreaView, Text} from "react-native";
/* components */
/* types */
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/navigation";
import {RouteProp} from "@react-navigation/native";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Clip">;
  route: RouteProp<RootStackParamList, "Clip">;
};

export const ClipScreen: React.FC<Props> = ({navigation, route}: Props) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Clip Screen</Text>
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
