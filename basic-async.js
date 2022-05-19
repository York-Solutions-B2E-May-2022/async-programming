// sync
console.log('sync - one')
console.log('sync - two')
console.log('sync - three')

// async
console.log('one')
getDataFromServer()
console.log('three')

function getDataFromServer() {
    setTimeout(
        () => {
            console.log('two')
        },
        1000
    )
}