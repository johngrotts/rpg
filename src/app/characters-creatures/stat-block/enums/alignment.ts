export interface Alignment {
  goodToEvil?: GoodToEvilEnum;
  goodToEvilOther?: string;
  lawfulToChaotic?: LawfulToChaotic;
  lawfulToChaoticOther?: string;
}

export enum GoodToEvilEnum {
  GOOD, NEUTRAL, EVIL, OTHER
}

export enum LawfulToChaotic {
  LAWFUL, NEUTRAL, CHAOTIC, OTHER
}
