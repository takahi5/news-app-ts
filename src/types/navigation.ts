import {Article} from "./article";

export type RootStackParamList = {
  Home: undefined;
  Clip: undefined;
  Article: {article: Article};
};
