import React from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import {WebView} from "react-native-webview";
import {useDispatch, useSelector} from "react-redux";
import {addClip, deleteClip} from "../store/actions/user";
/* components */
import {ClipButton} from "../components/ClipButton";
import {Loading} from "../components/Loading";
/* types */
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../types/navigation";
import {RouteProp} from "@react-navigation/native";
import {State} from "../types/state";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Article">;
  route: RouteProp<RootStackParamList, "Article">;
};

export const ArticleScreen: React.FC<Props> = ({navigation, route}: Props) => {
  const {article} = route.params;

  const user = useSelector((state: State) => state.user);

  const dispatch = useDispatch();

  const isClipped = () => {
    return user.clips.some((clip) => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({clip: article}));
    } else {
      dispatch(addClip({clip: article}));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView
        source={{uri: article.url}}
        startInLoadingState={true}
        renderLoading={() => {
          return <Loading />;
        }}
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
