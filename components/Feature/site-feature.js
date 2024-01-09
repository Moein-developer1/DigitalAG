const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="components/Feature/site-feature.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

                <div class="features">
                    <div class="feature__box">
                        <i class="fa fa-3x fa-mail-bulk"></i>
                        <h3 class="feature__title">Digital Marketing</h3>
                        <p class="feature__text">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>

                    <div class="feature__box">
                        <i class="fa fa-3x fa-search"></i>
                        <h3 class="feature__title">SEO & Backlinks</h3>
                        <p class="feature__text">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>

                    <div class="feature__box">
                        <i class="fa fa-3x fa-laptop-code"></i>
                        <h3 class="feature__title">Design & Development</h3>
                        <p class="feature__text">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                </div>
`
class Feature extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export{Feature}