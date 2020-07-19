
export class XReduced<C> {
  '@@transducer/reduced': boolean = true;
  '@@transducer/value': C;

  constructor(val: C) {
    this["@@transducer/value"] = val;
  }
}

export function xreduced<C>(val: C): XReduced<C> {
  if (val instanceof XReduced) {
    return val;
  }

  return new XReduced(val)
}

export function xForceReduced<C>(val: C): XReduced<C> {
  return new XReduced(val)
}

export function isXReduced(x: any): boolean {
  return x && x instanceof XReduced
}