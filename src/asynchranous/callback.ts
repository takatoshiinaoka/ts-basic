/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function callbackSample() {
    const url = 'https://api.github.com/users/takatoshiinaoka'

    //コールバックで呼び出す非同期処理
    const fetchProfile = () => {
        return fetch(url)
            .then((res) => {
                // レスポンスのBodyをJSONで読み取った結果を返す
                res.json()
                    .then((json) => {
                        console.log('Asynchronous Callback Sample 1:', json)
                        return json
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const profile = fetchProfile()
    console.log('Asynchronous Callback Sample 2:', profile)
}
