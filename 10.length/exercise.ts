type Length<T extends unknown> = T extends { length: number } ? T['length'] : never

/** test case */
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
]

type tesob = {
    name: string,
    age: number,
    length: 666
}

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
type tesobLength = Length<tesob> // expected 666

