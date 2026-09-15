class DevJobsAvatar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" })
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            img {
                 border: 10px solid red;
        </style>
            <img 
                id="cv"
                src="https://unavatar.io/github/marcalvarez-dev"
                style="width: 40px; height: 40px; border-radius: 9999px;"
             />
        `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("devjobs-avatar", DevJobsAvatar)