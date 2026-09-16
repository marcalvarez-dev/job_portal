class DevJobsAvatar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" })
    }

    createURL(service, username) {
        return `https://unavatar.io/${service}/${username}`
    }

    render() {
        const service = this.getAttribute("service") ?? "github"
        const username = this.getAttribute("username") ?? "marcalvarez-dev"
        const size = this.getAttribute("size") ?? "40"

        const url = this.createURL(service, username)

        this.shadowRoot.innerHTML = `
        <style>
            img {
                width: ${size}px;
                height: ${size}px;
                border-radius: 9999px;
            }
        </style>
            <img 
                alt="Avatar de ${username}"
                src="${url}"
                id="cv"
             />
        `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("devjobs-avatar", DevJobsAvatar)