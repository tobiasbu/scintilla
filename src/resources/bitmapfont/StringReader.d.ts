
type Str = string | { obj: any; name: string };

type RuleTypes = 'split' | 'into';

interface Rule {
  char: number;
  type: RuleTypes;
  index: number;
  ignore?: string | number | RegExp;
}

interface RuleMatcher {
  fw: number;
  ew: number;
  rule: Rule;
}

interface RuleOptions {
  char: number | string;
  ignore?: number | string | RegExp;
}

declare class StringReader {
  constructor(str: Str);
  addRule(type: RuleTypes, options: RuleOptions): void;
  eof(): boolean;
  read():string | string[];
  clear(): void;
  static isWhitespace(charCode: number): boolean;
}

export = StringReader;