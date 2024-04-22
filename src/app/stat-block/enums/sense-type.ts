import { BaseStatEnum } from "./base-stat-enum";

export interface SenseType extends BaseStatEnum {
  type: SenseTypeEnum;
}

export enum SenseTypeEnum {
  "DARKVISION", "PASSIVE PERCEPTION", "OTHER"
}
