const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {

    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)

    // Скрывает весь контент
    const hideTabContent = () => {
        content.forEach((item) => {
            item.style.display = 'none'
        })

        tab.forEach((item) => {
            item.classList.remove(activeClass)
        })
    }

    // Показываеть конкретный контент по индексу
    const showTabContent = (index) => {
        content[index].style.display = 'block'
        item[index].classList.add(activeClass)
    }

    hideTabContent()
    showTabContent()
}

export default tabs