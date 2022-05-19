// console.log('one')
// getDataFromServer()
// console.log('three')

console.log('one')
getDataFromServer()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
console.log('three')

function getDataFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                // reject('error')
                resolve('two')
            },
            1000
        )
    });
}