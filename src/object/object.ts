/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function objectSample() {
  // const a: object = {
  //     name: "takatoshi",
  //     age: 20
  // }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United State of America',
  }
  console.log('Object object sample 2:', country)

  // オプショナルとreadonly
  const takatoshi: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 20,
    lastName: 'Inaoka',
    firstName: 'Takatoshi',
  }

  takatoshi.gender = 'male'
  takatoshi.lastName = 'Kamado'
  // takatoshi.firstName = "Tanjiro"
  console.log('Object object sample 3:', takatoshi)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'
  console.log('Object object sample 4:', capitals)
}
