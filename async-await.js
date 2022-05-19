function _fetch(url) {
    return new Promise((resolve) => {
        resolve({
                url: 'my-website.com'
            }
        )
    })
}

_fetch('some-url')
    .then((data) => {
        _fetch(data.url)
            .then((data) => {
                _fetch(data.url)
                    .then(data => {
                        console.log(data)
                    })
            })
    })

async function main() {
    const x = 2
    const val1 = await _fetch(x);
    const val2 = await _fetch(val1);
    const val3 = await _fetch(val2);
    console.log(val3)
}

main()