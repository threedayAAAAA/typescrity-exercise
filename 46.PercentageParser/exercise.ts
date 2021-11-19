type preFix<T> = T extends '+' | '-' ? T : never
type surFix<T> = T extends `${infer U}%` ? [U, '%'] : [T, '']
type PercentageParser<T> = T extends `${preFix<infer U>}${infer R}` ? [U, ...surFix<R>] : ['', ...surFix<T>]

/** test case */
type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'

type R1 = PercentageParser<PString1>  // expected ['', '', '']
type R2 = PercentageParser<PString2>  // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>  // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>  // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>  // expected ["", "85", ""]