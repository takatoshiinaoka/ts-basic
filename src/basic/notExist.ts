/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-const */
export default function notExistSample() {
    let name = null
    console.log('notExist sample 1:', typeof name, name)

    name = 'takatoshi'
    if (name) {
        console.log('notExist sample 3:', '吾輩は猫である。名前は' + name)
    } else {
        console.log('notExist sample 2:', '吾輩は猫である。名前はまだ' + name)
    }

    let age = undefined
    console.log('notExist sample 4:', typeof age, age)

    age = 20
    if (age) {
        console.log('notExist sample 6:', '年齢は' + age + 'です')
    } else {
        console.log('notExist sample 5:', '年齢は秘密です')
    }
}
