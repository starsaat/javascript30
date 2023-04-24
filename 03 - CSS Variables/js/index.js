window.addEventListener('load', function () {
    const inputs = this.document.querySelectorAll('input')
    inputs.forEach(item => item.addEventListener('input', function () {
        document.documentElement.style.setProperty(`--${this.name}`, this.value + (this.dataset.unit || ''))
    }))
})