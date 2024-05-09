import { DieLevel } from "./die-level";

export interface Sense {
  type: SenseTypeEnum;
  distance?: number; // 120 (ft)
  dieLevel?: DieLevel;
  description?: string;
  keyDetails?: string;
}

export enum SenseTypeEnum {
  BLINDSIGHT, DARKVISION, TREMORSENSE, TRUESIGHT, TELEPATHY, CUSTOM
}
