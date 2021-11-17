// 联合类型转交叉
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type LastOf<T> = UnionToIntersection<
  T extends any ? () => T : never
> extends () => infer R
  ? R
  : never;

// TS4.0+
type Push<T extends any[], V> = [...T, V];

// 联合类型转元组
type TuplifyUnion<
  T,
  L = LastOf<T>,
  N = [T] extends [never] ? true : false
> = true extends N ? [] : Push<TuplifyUnion<Exclude<T, L>>, L>;

/** test case */
type A = {aaa: number}
type B = {bbb: boolean}
type result = UnionToIntersection<A | B>;
type result2 = TuplifyUnion<A | B>;

type C = any extends never ? 1 : 2