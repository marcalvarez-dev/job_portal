const container = document.querySelector(".jobs-results")
fetch("data.json")
    .then((response) => {
        return response.json();
    }).then((jobs) => {
        jobs.forEach(job => {
            const article = document.createElement("article")
            article.classList.add("job-article")
            article.dataset.modalidad = job.data.modalidad
            article.dataset.nivel = job.data.nivel
            article.dataset.tech = job.data.technology

            article.innerHTML = `
                <div>
                    <h2>${job.titulo}</h2>
                    <h5>${job.empresa} | ${job.ubicacion}</h5>
                    <p>${job.descripcion}</p>
                </div>
                <div>
                    <button class="button-apply" id="important-button"> Aplicar </button>
                </div>`

            container.appendChild(article)

        })

    })