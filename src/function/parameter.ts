/* eslint-disable @typescript-eslint/no-inferrable-types */
// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Usename is', username)
    return true
  } else {
    console.log('Function parameters sample 1: User is not signed in.')
    return false
  }
}

// デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, username: string = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is signed in! Usename is', username)
    return true
  } else {
    console.log('Function parameters sample 1: User is not signed in.')
    return false
  }
}

// レストパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productsPrice: number) => {
    return prevTotal + productsPrice
  }, 0)
}
