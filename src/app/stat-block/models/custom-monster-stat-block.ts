import { BaseStatBlock } from "./base-stat-block";

export interface CustomMonsterStatBlock extends BaseStatBlock {
  basedOff: string;
  keywords: string[];
}
