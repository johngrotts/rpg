import { KeyValue } from "@angular/common";
import { Sense } from "./sense";
import { Feature } from "./feature";
import { Action } from "./action";

export class BaseStatBlock {
  public name: string;
  public type: string;
  public size: string; //ENUM
  public alignment?: string; //ENUM
  public description?: string;
  public proficiencyBonus: number;
  public skills?: KeyValue<string, string>[]; //ENUM for second string (Profecient, Expert)
  public ac: number;
  public hp: number;
  public hpDice?: string;
  public speed: number;
  public customSpeed?: KeyValue<string, number>[];
  public str: number;
  public dex: number;
  public con: number;
  public int: number;
  public wis: number;
  public cha: number;
  public challenge?: number;
  public xp?: number;
  public damageTypes?: KeyValue<string, string>[] //ENUM for both type(acid, cold, ...) and second (vunerable, resistant, immune)
  public conditionImmunities?: string[]; //ENUM
  public senses?: Sense[];
  public languages?: KeyValue<string, string>[]; //ENUM for both language (elvish, common, ...) and second (understand, speak, read, write)
  public features?: Feature[];
  public actions?: Action[];
  public imageFile?: any;
}
