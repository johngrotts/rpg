import { BaseStatEnum } from "./base-stat-enum";

export interface ActionType extends BaseStatEnum {
  type: ActionTypeEnum;
  typeCustom?: string;
}

export enum ActionTypeEnum {
  ACTION, BONUS_ACTION, REACTION, CUSTOM
}
