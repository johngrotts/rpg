import { DieLevel } from "../../stat-block/enums/die-level";

export interface PlayerClass {
  name: string;
  subclass?: string;
  hpDie?: DieLevel;
}