function fetchData(resolve, reject, _fetch = fetch) {
    _fetch('https://www.reddit.com/r/programminghumor/.json')
        .then((response) => {
            if (!response.ok) {
                reject(new Error('response not ok'))
                return
            }
            response.json()
                .then(resolve)
        })
        .catch(reject)
}

test_fetchData_not_ok()

function generatePostList(list) {
    let str = ''
    for (let post of list) {
        str += `${post.data.title} <br>`
    }

    return str
}



function renderPostList() {
    fetchData(
        (json) => {
            const postHtml = generatePostList(json.data.children)
            document.getElementById('post-list').innerHTML = postHtml
        },
        (error) => {
            document.getElementById('post-list').innerHTML = error.message
        }
    )
}

// renderPostList()