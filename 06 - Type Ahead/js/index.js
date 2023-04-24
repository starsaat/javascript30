const dataUrl = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const input = document.querySelector('input')
input.addEventListener('input', function (e) {
    // console.log(this.value);
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 300) {
                const data = JSON.parse(this.responseText)
                const handle = data.filter(item => item.city.includes('a'))
                const result = handle.map(item => `<li><span>${item.city}</span><span>${item.population}</span></li>`)
                console.log(result.join(''))
                document.querySelector('ul').innerHTML = result.join('')
            }
        }
    }
    xhr.open("GET", dataUrl)
    xhr.send()
})