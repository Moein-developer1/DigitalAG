const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="components/Header/site-header.css">
<header>
<img src="images/blob-top-left.png" class="blob__top left" alt="">
<img src="images/blob-top-right.png" class="blob__top right" alt="">
<img src="images/blob-center.png" class="blob__center" alt="">
<div class="container">
    <div class="header">
        <div class="header__content">
            <h2 class="header__title">About <hr> </h2>
            <p class="header__text">Home / Pages / About</p>
        </div>
    </div>
</div>
<img src="images/blob-bottom-left.png" class="blob__bottom left" alt="">
<img src="images/blob-bottom-right.png" class="blob__bottom right" alt="">
</header>
`

class Header extends HTMLElement {
    constructor () {
        super ()

        let shadow = this.attachShadow({mode:'open'})
        shadow.append(template.content.cloneNode(true))
    
        let headerTitle = this.shadowRoot.querySelector('.header__title')
        headerTitle.innerText = this.getAttribute('title')
        
        let headerText = this.shadowRoot.querySelector('.header__text')
        headerText.innerText = this.getAttribute('text')
    }

    static observedAttributes () {
        return [title,text]
    }
}

export {Header}