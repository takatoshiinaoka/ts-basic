// import World from './world'
// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello World!!!')
// world.sayHello(root)

// 03.基本の型定義
// import { primitiveSample, notExistSample, anySample, unknownSanple } from './basic'
// unknownSanple()
// anySample()
// notExistSample()
// primitiveSample()

// 04.関数の型定義
// import { logMessage, LogMessage6, LogMessage7 } from './function/basic'
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameter'
// logMessage('Hello TypeScript!')
// LogMessage6('message6')
// LogMessage7('message7')
// isUserSignedIn('ABC', 'takatoshi')
// isUserSignedIn('DEF')
// isUserSignedIn2('ABC')
// const sum = sumProductsPrice(100, 200, 300, 400, 500)
// console.log('Functon parameters sapmple 5:', sum)

// 05.オブジェクトの型定義
// import objectSample from './object/object'
// import typeAliasSample from './object/alias'
// objectSample()
// typeAliasSample()

// 06.配列とタプルの型定義
import arraySample from './array/array'
import tupleSample from './array/tuple'
arraySample()
tupleSample()
