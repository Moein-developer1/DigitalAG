let template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="components/Navbar/site-navbar.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
<div class="navbar">
<h2 class="nav__title">
    <a href="#">DGital</a>
</h2>

<ul class="nav__list">
    <li class="nav__item">
        <a href="index.html" class="nav__link" id="home">Home</a>
    </li>

    <li class="nav__item">
        <a href="about.html" class="nav__link" id="about">About</a>
    </li>

    <li class="nav__item">
        <a href="service.html" class="nav__link" id="service">Service</a>
    </li>

    <li class="nav__item">
        <a href="project.html" class="nav__link" id="project">Project</a>
    </li>

    <li class="nav__item pages">
        <a href="#" class="nav__link" id="pages">Pages <i class="fa-solid fa-caret-down"></i></a>
        <ul class="drop__down-list">
            <li class="drop__down-item">
                <a href="team.html" class="drop__down-link" id="team">Our Team<a>
            </li>

            <li class="drop__down-item">
                <a href="404.html" class="drop__down-link" id="not-found">404<a>
            </li>
        </ul>
    </li>

    <li class="nav__item">
        <a href="contact.html" class="nav__link" id="contact">Contact</a>
    </li>
</ul>

<div class="nav__button">
    <a href="#">Get Started</a>
</div>

<div class="hamburger__menu-btn">
<div class="hamburger__menu">
</div>
</div>

</div>
`

class Navbar extends HTMLElement {
    constructor(){
        super()

        // this.attachShadow({mode:"open"})
        // this.shadowRoot.appendChild(template.content.cloneNode(true))
        
        const shadowRoot = this.attachShadow({mode:'open'})
        let clone = template.content.cloneNode(true)
        shadowRoot.append(clone)

        window.addEventListener('scroll' , () => {
            if(scrollY > 0) {
                document.body.classList.add('scrolled')
                this.shadowRoot.querySelector('.navbar').classList.add('scrolled')
            } else {
                document.body.classList.remove('scrolled')                
                this.shadowRoot.querySelector('.navbar').classList.remove('scrolled')
            }
        })

        window.addEventListener('click' , e => {
            if(e.target.tagName !== "SITE-NAVBAR") {
                this.closeList()
            }
        })
    }
    
    connectedCallback() {
        let navList = this.shadowRoot.querySelector('.nav__list')
        let hamburgerMenuBtn = this.shadowRoot.querySelector('.hamburger__menu-btn');
        hamburgerMenuBtn.addEventListener('click' , () => {
            hamburgerMenuBtn.classList.toggle('open')
            navList.classList.toggle('active')
        })

        let navLink = navList.querySelectorAll('.nav__item .nav__link')
        navLink.forEach(link => {
            link.addEventListener('click' , () => {
                navList.classList.remove('active')
            })
        })

        this.shadowRoot.addEventListener('click' , (e) => {
            if(e.target !== hamburgerMenuBtn && e.target.parentNode !== hamburgerMenuBtn) {
                this.closeList()
            }
        })

        let targetHover = this.getAttribute('target')
        this.shadowRoot.querySelector(`#${targetHover}`).classList.add('active')

        if(this.hasAttribute('subTarget')){
            let subTargetHover = this.getAttribute('subTarget')
            this.shadowRoot.querySelector(`#${subTargetHover}`).classList.add('active')
        }
    }

    closeList () {
        this.shadowRoot.querySelector('.hamburger__menu-btn').classList.remove('open')
        this.shadowRoot.querySelector('.nav__list').classList.remove('active')
    }

    static observedAttributes () {
        return [target,subTarget]
    }
}

export{Navbar}