import { KeyValue } from "@angular/common";
import { IndividualStat } from "./stat-block";

export interface Skill {
  skill: KeyValue<SkillEnum, IndividualStat>;
  level: SkillLevelEnum;
  levelOther?: string;
  skillOther?: string;
  hasAdvantage?: boolean;
  hasDisadvantage?: boolean;
}

export enum SkillEnum {
  // Str
  ATHLETICS, 
  // Dex
  ACROBATICS, SLEIGHT_OF_HAND, STEALTH, 
  // Int
  ARCANA, HISTORY, INVESTIGATION, NATURE, RELIGION,
  // Wis
  ANIMAL_HANDLING, INSIGHT, MEDICINE, PERCEPTION, SURVIVAL, 
  // Cha
  DECEPTION, INTIMIDATION, PERFORMANCE, PERSUASION,
  // Other
  OTHER
}

export enum SkillLevelEnum {
  PROFECIENT, EXPERT, OTHER
}
