const searchbar = document.querySelector("#searchbar")
console.log(searchbar)


searchbar.addEventListener("input", () => {
    const articles = document.querySelectorAll(".job-article")
    const buscadorTexto = searchbar.value

    articles.forEach(article => {
        const title = article.querySelector("h2").textContent.toLowerCase()

        if (!title.startsWith(buscadorTexto.toLowerCase())) {
            article.classList.add("invisible")
        } else {
            article.classList.remove("invisible")
        }
    })
})