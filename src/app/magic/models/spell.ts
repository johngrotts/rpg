import { KeyValue } from "@angular/common";
import { Damage } from "../../combat/models/damage";
import { IndividualStat } from "../../stat-block/enums/stat-block";
import { PlayerClass } from "../../class/models/player-class";

export interface Spell {
  name: string;
  description: string;
  castingTime: KeyValue<number, string>;
  duration: KeyValue<number, string>;
  level: number;
  damages?: Damage[];
  school?: SpellSchool;
  schoolCustom?: string;
  range?: number;
  area?: number;
  areaType?: SpellAreaType;
  areaTypeCustom: string;
  concentration?: boolean;
  ritual?: boolean;
  components?: SpellComponent[];
  save?: KeyValue<IndividualStat, number>;
  accessibleClasses: PlayerClass[];
}

export enum SpellSchool {
  ABJURATION, CONJURATION, ENCHANTMENT, EVOCATION, ILLUSION, NECROMANCY, TRANSMUTATION, CUSTOM
}

export enum SpellAreaType {
  CIRCLE, SPHERE, WALL, SPREAD, LINE, CUBE, CUSTOM
}

export interface SpellComponent {
  type: SpellComponentType;
  typeCustom?: string;
  components?: SpellComponentInfo[];
}

export interface SpellComponentInfo {
  component: string;
  materialCost?: string;
}

export enum SpellComponentType {
  VERBAL, SOMATIC, MATERIAL, CUSTOM
}
