/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
export default function interfaceSample() {
  interface Bread {
    colories: number
  }

  interface Bread {
    type: string
  }

  const francePan: Bread = {
    colories: 300,
    type: 'hard',
  }

  // 型エイリアスで表現
  type MaboDofu = {
    calories: number
    spicyLevel: number
  }

  type Rice = {
    calories: number
    gram: number
  }

  type MaboDon = MaboDofu & Rice // 交差型(union)

  const maboDon: MaboDon = {
    calories: 500,
    spicyLevel: 10,
    gram: 350,
  }

  // インターフェースの継承
  interface Book {
    page: number
    title: string
  }

  interface Magazine extends Book {
    cycle: 'deily' | 'weekly' | 'monthly' | 'yearly'
  }

  const jump: Magazine = {
    page: 300,
    title: '週刊少年ジャンプ',
    cycle: 'weekly',
  }

  type BookType = {
    page: number
    title: string
  }

  interface Handbook extends BookType {
    theme: string
  }

  const cotrip: Handbook = {
    page: 120,
    title: 'ことりっぷ',
    theme: '旅行',
  }

  // implementsを使ってclassに型を定義する
  class Comic implements Book {
    page: number
    title: string

    constructor(page: number, title: string, private publishYear: string) {
      this.page = page
      this.title = title
    }

    getPublishYear() {
      return this.title + 'が発売されたのは' + this.publishYear + '年です。'
    }
  }

  const popularComic = new Comic(200, '鬼滅の刃', '2016')
  console.log(popularComic.getPublishYear())
}
