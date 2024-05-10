export interface LanguageKnown {
  language: string;
  level: LanguageLevel[];
  otherLevel: string;
}

export enum LanguageLevel {
  UNDERSTAND, SPEAK, READ, WRITE, OTHER
}
