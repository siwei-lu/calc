// @flow
export const range = (start: number, end: number) =>
  new Array(end - start).fill(0).map<number>((_, i) => i + start)