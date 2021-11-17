type Permutation<U, Full = U> = U extends any ? 
    Exclude<Full, U> extends never ? [Full] : [U, ...Permutation<Exclude<Full, U>>] :
    [];

/** test case */
type perm = Permutation<'A' | 'B' | 'C'> 
// ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']