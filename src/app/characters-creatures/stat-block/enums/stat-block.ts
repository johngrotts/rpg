import { KeyValue } from "@angular/common";

export interface StatBlock {
  stats: KeyValue<IndividualStat, number>[];
}

export interface IndividualStat {
  statName: StatBlockEnum;
  otherName?: string;
  otherShortName?: string;
}

export enum StatBlockEnum {
  STRENGTH = 'STR',
  CHARISMA = 'CHA',
  WISDOM = 'WIS',
  CONSTITUTION = 'CON',
  DEXDERITY = 'DEX',
  INTELLIGENCE = 'INT',
  OTHER = 'OTH',
}
