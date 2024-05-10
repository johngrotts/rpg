import { KeyValue } from "@angular/common";
import { Sense } from "../enums/sense";
import { Feat } from "../enums/feat";
import { Action } from "./action";
import { Alignment } from "../enums/alignment";
import { Size } from "../enums/size";
import { StatBlock } from "../enums/stat-block";
import { LanguageKnown } from "../enums/language-known";
import { DamageType } from "../enums/damage-type";
import { Condition } from "../enums/condition";
import { Skill } from "../enums/skill";
import { LimitedUsage } from "../enums/limited-usage";
import { Magic } from "../../magic/models/magic";
import { HitPoints } from "../enums/hit-points";

export interface BaseStatBlock {
  name: string;
  type: string;
  ac: number;
  hp: HitPoints;
  stats: StatBlock[];
  magic?: Magic;
  speed?: KeyValue<string, number>[];
  size?: Size;
  alignment?: Alignment
  description?: string;
  proficiencyBonus?: number;
  skills?: Skill[];
  damageTypes?: DamageType[];
  conditions?: Condition[]; 
  senses?: Sense[];
  languages?: LanguageKnown[];
  feats?: Feat[];
  actions?: Action[];
  limitedUsages?: LimitedUsage[];
  imageFile?: any;
  
}
