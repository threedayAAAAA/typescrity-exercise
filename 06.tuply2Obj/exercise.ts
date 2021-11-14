type TupleToObject<T extends readonly string[]> = {
  [key in T[number]]: key
}

/** test case */
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type a = typeof tuple[number]

const result: TupleToObject<typeof tuple> = { // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  tesla: 'tesla',
  'model 3': 'model 3',
  'model X': 'model X',
  'model Y': 'model Y',
} 
