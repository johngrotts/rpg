import { DieLevel } from "../enums/die-level";
import { BaseStatBlock } from "./base-stat-block";

export interface NonPlayerCharacter extends BaseStatBlock{
  hpDice?: DieLevel;
  challenge?: number;
  xp?: number;
}