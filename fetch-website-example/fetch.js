function fetchData(callback) {
    fetch('https://www.reddit.com/r/programminghumor/.json')
        .then((response) => {
            response.json()
                .then(callback)
        })
}

function generatePostList(list) {
    let str = ''
    for (let post of list) {
        str += `${post.data.title} <br>`
    }

    return str
}

function renderPostList() {
    fetchData((json) => {
        document.getElementById('post-list').innerHTML = generatePostList(json.data.children)
    })
}

renderPostList()