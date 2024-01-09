const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="components/Service-section/site-service.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
<div class="service">
    <div class="service__cover">
        <i class="fa fa-search fa-2x"></i>
    </div>

    <h3 class="service__title">SEO Optimization</h3>
                    
    <p class="service__text">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        
    <a href="#" class="service__link"><i class="fa fa-arrow-right"></i></a>
</div>
`

class Service extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        let serviceName = this.shadowRoot.querySelector('.service__title')
        serviceName.innerText = this.getAttribute('title')
    
        let serviceIcon = this.shadowRoot.querySelector('.service__cover i')
        serviceIcon.className = this.getAttribute('icon')
    }

    static observedAttributes () {
        return ['icon','title']
    }
}

export {Service}