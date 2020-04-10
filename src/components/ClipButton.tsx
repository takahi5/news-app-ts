import React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

type Props = {
  onPress: () => void;
  enabled: boolean;
};

export const ClipButton = ({onPress, enabled}: Props) => {
  const name = enabled ? "bookmark" : "bookmark-o";
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={name} size={40} color="gray" />
    </TouchableOpacity>
  );
};
