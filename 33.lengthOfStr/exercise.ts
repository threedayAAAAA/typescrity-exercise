type StrToArr<T extends string, R = []> = T extends `${infer first}${infer reset}` ? [first, ...StrToArr<reset>] : [] 
type LengthOfStr<T extends string> = StrToArr<T>['length']

/** test case */
type perm = LengthOfStr<'abc '> // 4 