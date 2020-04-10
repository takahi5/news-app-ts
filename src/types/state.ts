import {AddClipAction, DeleteClipAction} from "../store/actions/user";
import {User} from "./user";

export interface State {
  user: User;
}

export type Actions =
  // user
  AddClipAction | DeleteClipAction;
