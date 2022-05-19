function fetchData() {
    fetch('https://www.reddit.com/r/programminghumor/.json')
        .then((response) => {
            response.json()
                .then((json) => {
                    console.log(json.data.children[0].data.title)
                })
        })
}

fetchData()