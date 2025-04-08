const searchInput = window.document.getElementById('search')

searchInput.addEventListener('input', (event) => {
    const value = formatStringh(event.target.value)

    const items = window.document.querySelectorAll('.item', 'items')
    const noResults = window.document.getElementById('no_results')

    let hasResults = false

    if (value != '') 
    items.forEach(item => {
        const itemTitle = item.querySelector('.item-title').textContent

        if (formatStringh(itemTitle).indexOf(value) !== -1) {
            item.style.display = 'flex'

            hasResults = 'none'
        } else {
             item.style.display = 'none'
        }
    })

    if (hasResults) {
        noResults.style.display = 'none'
    } else {
        noResults.style.display = 'block'
        console.log('gay')
    }
})

function formatStringh(value) {
    return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}