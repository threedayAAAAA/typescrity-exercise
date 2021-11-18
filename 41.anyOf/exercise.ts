type KebabCase<T extends string, B extends boolean = true> = T extends `${infer First}${infer Last}`
		? First extends Uppercase<First>
			? `${B extends true ? '' : '-'}${Lowercase<First>}${KebabCase<Last, false>}`
			: `${First}${KebabCase<Last, false>}`
		: T;

/** test case */
type Result = KebabCase<'FooBarBaz'> // expected to be 'for-bar-baz'