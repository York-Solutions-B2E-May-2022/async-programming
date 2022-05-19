async function fetchData(_fetch = fetch) {
    try {
        const response = await _fetch('https://www.reddit.com/r/programminghumor/.json');
        if (!response.ok) {
            return 'response not ok'
        }

        const data = await response.json()
        return data;

    } catch (error) {
        return 'response not found'
    }
}

async function test_fetchData_response_not_ok() {
    const _fetch = async () => {
        return {
            ok: false
        }
    }

    const result = await fetchData(_fetch)

    if (result !== 'response not ok') {
        console.log('failed the test')
    } else {
        console.log('passed')
    }
}

async function test_fetchData_response_ok() {
    // const _fetch = () => {
    //     return new Promise((resolve, reject) => {
    //         resolve(
    //             {
    //                 ok: true,
    //                 json: () => {
    //                     return new Promise((resolve, reject) => {
    //                         resolve(true)
    //                     })
    //                 }
    //             }
    //         )
    //     })
    // }

    const _fetch = async () => {
        return {
            ok: true,
            json: async () => {
                return true
            }
        }
    }

    const result = await fetchData(_fetch);

    if (result !== true) {
        console.log('test_fetchData_response_not_ok - failed')
    } else {
        console.log('test_fetchData_response_not_ok - passed')
    }
}

test_fetchData_response_not_ok();
test_fetchData_response_ok();

function generatePostList(list) {
    if (typeof list !== 'object') {
        return list
    }

    let str = ''
    for (let post of list.data.children) {
        str += `${post.data.title} <br>`
    }

    return str
}


// async function renderPostList() {
//     const json = await fetchData()
//     const postHtml = generatePostList(json)
//     document.getElementById('post-list').innerHTML = postHtml
// }
//
// renderPostList()