type Includes<U extends unknown[], T extends unknown> = T extends U[number] ? true : false;

/** test case */
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`