function _fetch(url) {
    return new Promise((resolve) => {
        resolve({
            url: 'my-website.com'
        })
    })
}

_fetch('some-url')
    .then((data) => {
        _fetch(data.url)
            .then((data) => {
                _fetch(data.url)
                    .then((data) => {
                        _fetch(data.url)
                            .then((data) => {
                                _fetch(data.url)
                                    .then((data) => {
                                        _fetch(data.url)
                                            .then((data) => {
                                                console.log(data)
                                            })
                                    })
                            })
                    })
            })
    })

