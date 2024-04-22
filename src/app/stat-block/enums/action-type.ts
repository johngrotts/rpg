import { BaseStatEnum } from "./base-stat-enum";

export interface ActionType extends BaseStatEnum {
  type: ActionTypeEnum;
}

export enum ActionTypeEnum {
  "ACTION", "BONUS ACTION", "REACTION", "OTHER"
}
