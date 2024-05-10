import { ResistanceVulnerableLevel } from "./resistance-vulnerable-level";

export interface Condition {
  condition: ConditionEnum;
  level: ResistanceVulnerableLevel;
  conditionOther?: string;
  description?: string;
}

export enum ConditionEnum {
  BLIND, CHARM, DEAF, FEAR, GRAPPLE, INCAPACITATED, INVISIBLE, 
  PARALYZE, PETRIFY, POISON, PRONE, RESTRAIN, STUN, UNCONSCIOUS, OTHER
}
