import { DieLevel } from "../../stat-block/enums/die-level";
import { DamageTypeEnum } from "../enums/damage-type-enum";

export interface Damage {
  type: DamageTypeEnum;
  damage: DieLevel;
  bonusDamage?: number;
}


