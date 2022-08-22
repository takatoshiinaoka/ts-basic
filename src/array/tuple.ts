/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-const */
export default function tupleSample() {
    // 一般的なタプルの型定義
    let response: [number, string] = [200, 'OK']
    // response = [400, "Bad Request", "Email parameter is missing"]

    console.log('Aarray tuple sample 1:', response)

    // 可変長引数を使ったタプル
    const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
    girlfriends.push('Misa')
    console.log('Aarray tuple sample 2:', girlfriends)
}
