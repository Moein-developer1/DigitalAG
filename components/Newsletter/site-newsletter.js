const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="components/Newsletter/site-newsletter.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
<div class="newsletter">
<h2 class="newsletter__desc">Stay Always In Touch</h2>
<p class="newsletter__text">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo</p>

<div class="newsletter__input-wraper">
    <input type="text" name="" id="" placeholder="Enter Your Email...">
    <button><i class="fa fa-paper-plane"></i></button>
</div>
</div>
`

class Newsletter extends HTMLElement {
    constructor() {
        super()
    
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export {Newsletter}