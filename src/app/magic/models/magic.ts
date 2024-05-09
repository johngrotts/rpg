import { KeyValue } from "@angular/common";
import { Spell } from "./spell";

export interface Magic {
  spellSlots: KeyValue<number, number>[]; // Level, Number of Slots
  numberOfSpellsKnown?: KeyValue<number, number>[]; // Level, Number of Slots
  currentSpells?: Spell[];
  spellsUsed?: KeyValue<number, number>[]; // Level, Number of Slots
}