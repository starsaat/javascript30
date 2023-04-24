const divs = document.querySelectorAll('.box div')
divs.forEach(item => {
    item.addEventListener('click', function () {
        this.classList.toggle('active')
    })
})

function word(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('active_move')
    }
}

divs.forEach(item => item.addEventListener('transitionend', word))
