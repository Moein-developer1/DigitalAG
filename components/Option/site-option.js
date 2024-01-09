const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="components/Option/site-option.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
<div class="options">
<div class="option">
    <i class="fa fa-certificate fa-3x"></i>
    <h2 class="option__num" data-target="9">0</h2>
    <h3 class="option__title">Years Experience</h3>
</div>

<div class="option">
    <i class="fa fa-users-cog fa-3x"></i>
    <h2 class="option__num" data-target="157">100</h2>
    <h3 class="option__title">Team Members</h3>
</div>

<div class="option">
    <i class="fa fa-users fa-3x"></i>
    <h2 class="option__num" data-target="1247">1100</h2>
    <h3 class="option__title">Satisfied Clients</h3>
</div>

<div class="option">
    <i class="fa fa-check fa-3x"></i>
    <h2 class="option__num" data-target="275">200</h2>
    <h3 class="option__title">Compleate Projects</h3>
</div>
</div>
`

class Option extends HTMLElement {
    constructor(){
        super()
    
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    
        let options = this.shadowRoot.querySelectorAll('.option')

        window.addEventListener('load' , loadNumbers)

        function loadNumbers () {
            options.forEach(option => {
            let number = option.querySelector('.option__num')
        
            let p = 0
            let myInterval = setInterval(() => {
            p++

            number.innerHTML = p

            if(number.innerHTML == number.dataset.target) {
                clearInterval(myInterval)
            }
        }, 5);
    })
}

    }
}

export{Option}