window.addEventListener('load', function () {
    const hour = this.document.querySelector('.hour')
    const minuter = this.document.querySelector('.minuter')
    const second = this.document.querySelector('.second')

    function setTime() {
        let date = new Date()
        hour.style.transform = `translateX(-50%)rotate(${date.getHours() * (360 / 12)}deg)`
        minuter.style.transform = `translateX(-50%)rotate(${date.getMinutes() * (360 / 60)}deg)`
        second.style.transform = `translateX(-50%)rotate(${date.getSeconds() * (360 / 60)}deg)`
    }
    this.setInterval(setTime, 1000)
    setTime()
})