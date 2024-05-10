import { DieLevel } from "./die-level";

export interface LimitedUsage {
  name: string;
  description: string;
  usagesPerDay?: number;
  rechargeOn?: number[];
  rechargeDieLevel?: DieLevel;
  rechargeOnShortRest?: boolean;
  rechargeOnLongRest?: boolean;
}