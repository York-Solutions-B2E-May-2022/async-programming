function fetchData(resolve, reject) {
    fetch('https://www.reddit.com/r/programminghumor/.json')
        .then((response) => {
            if (!response.ok) {
                return reject('response not ok')
            }
            response.json()
                .then(resolve)
        })
        .catch(reject)
}

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

renderPostList()