const container = document.querySelector(".jobs-results")

let allJobs = []
const PAGE_MAX = 3

fetch("data.json")
    .then((response) => {
        return response.json();
    }).then((jobs) => {
        allJobs = jobs
        renderOfertas(1)
        generarBotones()

    })

function renderOfertas(page) {
    let inicio = (page - 1) * 3
    let fin = inicio + 3

    let jobsPagina = allJobs.slice(inicio, fin)

    jobsPagina.forEach(oferta => {
        const article = document.createElement("article")
        article.classList.add("job-article")
        article.dataset.modalidad = oferta.data.modalidad
        article.dataset.nivel = oferta.data.nivel
        article.dataset.tech = oferta.data.technology

        article.innerHTML = `
        <div>
            <h2>${oferta.titulo}</h2>
            <h5>${oferta.empresa} | ${oferta.ubicacion}</h5>
            <p>${oferta.descripcion}</p>
        </div>
        <div>
            <button class="button-apply" id="important-button"> Aplicar </button>
        </div>`

        container.appendChild(article)
    })
}

function generarBotones() {
    let totalPaginas = Math.ceil(allJobs.length / PAGE_MAX)

    const nav = document.querySelector(".pagination")

    for (let i = 1; i <= totalPaginas; i++) {
        let svgRightPosition = nav.lastElementChild
        console.log(svgRightPosition)
        const pagination = document.createElement("a")
        pagination.textContent = i
        pagination.href = "#"
        nav.insertBefore(pagination, svgRightPosition)
    }

}








