import { ActionType } from "../enums/action-type";

export interface Action {
  name: string;
  description: string;
  type: ActionType;
}
