import { BaseStatBlock } from "./base-stat-block";

export interface PlayerCharacter extends BaseStatBlock {
  currentHp: number;
  temporaryHp?: number;
  
}