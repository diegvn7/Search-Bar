const searchInput = window.document.getElementById('search')

searchInput.addEventListener('input', (event) => {
    const value = event.target.value
})

function formatStringh(value) {
    return value.toLowerCase().trim()
}