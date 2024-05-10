import { DamageTypeEnum } from "../../combat/enums/damage-type-enum";
import { ResistanceVulnerableLevel } from "./resistance-vulnerable-level";

export interface DamageType {
  damageType: DamageTypeEnum;
  damageTypeOther?: string;
  dmgResLevel: ResistanceVulnerableLevel;

}
