/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function anySample() {
  let name: any = 'takatoshi' //string型を代入
  console.log('any sample 1:', typeof name, name)

  name = 20
  console.log('any sample 2:', typeof name, name)
}
