/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function typeAliasSample() {
    /*
     * 型エイリアス
     */
    type Country = {
        capital: string
        language: string
        name: string
    }

    const japan: Country = {
        capital: 'Tokyo',
        language: 'Jananese',
        name: 'Japan',
    }
    console.log('Object alias sample 1:', japan)

    const america: Country = {
        capital: 'Washington, D.C.',
        language: 'English',
        name: 'United State of America',
    }
    console.log('Object alias sample 1:', america)

    /*
     * 合併型(union)と交差型(intersection)
     */
    type Knight = {
        hp: number
        sp: number
        weapon: string
        swordSkill: string
    }
    type Wizard = {
        hp: number
        mp: number
        weapon: string
        magicSkill: string
    }

    // 合併型... KnightまたはWizardの型を持つ
    type Adventurer = Knight | Wizard

    // 交差型... KnightかつWizardの型を持つ
    type Paladin = Knight & Wizard

    // Knightよりの冒険者
    const adventurer1: Adventurer = {
        hp: 100,
        sp: 30,
        weapon: '木の剣',
        swordSkill: '三連切り',
    }

    // Wizardよりの冒険者
    const adventurer2: Adventurer = {
        hp: 100,
        mp: 30,
        weapon: '木の剣',
        magicSkill: 'ファイヤーボール',
    }

    console.log('Object alias sample 3:', adventurer1)
    console.log('Object alias sample 3:', adventurer2)

    const paradin: Paladin = {
        hp: 300,
        sp: 100,
        mp: 100,
        weapon: '銀の剣',
        swordSkill: '三連切り',
        magicSkill: 'ファイヤーボール',
    }
    console.log('Object alias sample 3:', paradin)
}
