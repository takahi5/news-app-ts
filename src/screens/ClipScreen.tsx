import React, {useEffect, useState} from "react";
import {StyleSheet, SafeAreaView, FlatList} from "react-native";
import {useSelector} from "react-redux";
/* components */
import {ListItem} from "../components/ListItem";
/* types */
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/navigation";
import {RouteProp} from "@react-navigation/native";
import {State} from "../types/state";
import {User} from "../types/user";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Clip">;
  route: RouteProp<RootStackParamList, "Clip">;
};

export const ClipScreen: React.FC<Props> = ({navigation, route}: Props) => {
  const user = useSelector((state: State) => state.user) as User;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={user.clips}
        renderItem={({item}) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article", {article: item})}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
