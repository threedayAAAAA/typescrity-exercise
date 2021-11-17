type TWhitespace = ' ' | '\n' | '\t';
type TrimLeft<T> = T extends `${TWhitespace}${infer U}` ? TrimLeft<U> : T;

/** test case */
type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '