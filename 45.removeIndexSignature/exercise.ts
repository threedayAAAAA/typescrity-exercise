type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ? never : K]: K
  }

/** test case */
type Foo = {
    [key: string]: any;
    foo(): void;
}

type A = RemoveIndexSignature<Foo>  // expected { foo(): void }