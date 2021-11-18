type FalSy = 0 | '' | [] | Record<string, never>
type AnyOf<T extends readonly unknown[]> =
  T[number] extends infer R
    ? Exclude<R, FalSy> extends never
      ? false
      : true
    : false

/** test case */
type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.