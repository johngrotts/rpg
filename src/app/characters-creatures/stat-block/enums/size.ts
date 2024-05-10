export interface Size {
  size: SizeEnum;
  customSize?: string;
}

export enum SizeEnum {
  TINY, SMALL, MEDIUM, LARGE, HUGE, GARGANTUAN, CUSTOM
}
