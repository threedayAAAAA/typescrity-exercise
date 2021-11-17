type Replace<T extends string, U extends string, L extends string> = T extends `${infer left}${U}${infer right}` ? `${left}${L}${right}` : T;

/** test case */
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'