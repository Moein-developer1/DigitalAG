const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="components/Projects/site-project.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
<div class="projects">
                    <div class="filter__buttons">
                        <button data-name="all" class="active">All</button>
                        <button data-name="web-design">Web Design</button>
                        <button data-name="graphic-design">Graphic Design</button>
                    </div>

                    <div class="filterable__cards">
                        <div class="card" data-name="web-design">
                            <div class="card__cover">
                                <div class="cover__icon-wraper">
                                    <a href="#" class="cover__icon"><i class="fa fa-eye"></i></a>
                                    <a href="#" class="cover__icon"><i class="fa fa-link"></i></a>
                                </div>
                                <img src="images/portfolio-1.jpg" alt="">
                            </div>

                            <div class="card__content" >
                                <h3 class="content__title">
                                    UI/UX Design
                                </h3>
                                <p class="content__text">
                                    Digital Agency Website Design And Development 
                                </p>
                            </div>
                        </div>

                        <div class="card" data-name="graphic-design">
                            <div class="card__cover">
                                <div class="cover__icon-wraper">
                                    <a href="#" class="cover__icon"><i class="fa fa-eye"></i></a>
                                    <a href="#" class="cover__icon"><i class="fa fa-link"></i></a>
                                </div>
                                <img src="images/portfolio-2.jpg" alt="">
                            </div>

                            <div class="card__content">
                                <h3 class="content__title">
                                    UI/UX Design
                                </h3>
                                <p class="content__text">
                                    Digital Agency Website Design And Development 
                                </p>
                            </div>
                        </div>

                        <div class="card" data-name="web-design">
                            <div class="card__cover">
                                <div class="cover__icon-wraper">
                                    <a href="#" class="cover__icon"><i class="fa fa-eye"></i></a>
                                    <a href="#" class="cover__icon"><i class="fa fa-link"></i></a>
                                </div>
                                <img src="images/portfolio-3.jpg" alt="">
                            </div>

                            <div class="card__content">
                                <h3 class="content__title">
                                    UI/UX Design
                                </h3>
                                <p class="content__text">
                                    Digital Agency Website Design And Development 
                                </p>
                            </div>
                        </div>

                        <div class="card" data-name="graphic-design">
                            <div class="card__cover">
                                <div class="cover__icon-wraper">
                                    <a href="#" class="cover__icon"><i class="fa fa-eye"></i></a>
                                    <a href="#" class="cover__icon"><i class="fa fa-link"></i></a>
                                </div>
                                <img src="images/portfolio-4.jpg" alt="">
                            </div>

                            <div class="card__content">
                                <h3 class="content__title">
                                    UI/UX Design
                                </h3>
                                <p class="content__text">
                                    Digital Agency Website Design And Development 
                                </p>
                            </div>
                        </div>

                        <div class="card" data-name="web-design">
                            <div class="card__cover">
                                <div class="cover__icon-wraper">
                                    <a href="#" class="cover__icon"><i class="fa fa-eye"></i></a>
                                    <a href="#" class="cover__icon"><i class="fa fa-link"></i></a>
                                </div>
                                <img src="images/portfolio-5.jpg" alt="">
                            </div>

                            <div class="card__content">
                                <h3 class="content__title">
                                    UI/UX Design
                                </h3>
                                <p class="content__text">
                                    Digital Agency Website Design And Development 
                                </p>
                            </div>
                        </div>

                        <div class="card" data-name="graphic-design">
                            <div class="card__cover">
                                <div class="cover__icon-wraper">
                                    <a href="#" class="cover__icon"><i class="fa fa-eye"></i></a>
                                    <a href="#" class="cover__icon"><i class="fa fa-link"></i></a>
                                </div>
                                <img src="images/portfolio-6.jpg" alt="">
                            </div>

                            <div class="card__content">
                                <h3 class="content__title">
                                    UI/UX Design
                                </h3>
                                <p class="content__text">
                                    Digital Agency Website Design And Development 
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
`
class Projects extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        let filterableButtons = this.shadowRoot.querySelectorAll('.filter__buttons button')
        let filterableCard = this.shadowRoot.querySelectorAll('.filterable__cards .card')

        const filterCard = event => {
            if( event.target.tagName === 'BUTTON' ) {
                this.shadowRoot.querySelector('.active').classList.remove('active')
                event.target.classList.add('active')

                filterableCard.forEach(card => {
                    card.className = 'card'
                    if(card.dataset.name === event.target.dataset.name || event.target.dataset.name === 'all'){
                        card.classList.remove('hide')
                        card.classList.add('show')
                    } else {
                        card.classList.add('hide')
                        card.classList.remove('show')
                    }
                })
            } else {
                return false
            }
        }

        filterableButtons.forEach(button => {
            button.addEventListener('click' , filterCard)
        })
    }
}

export{Projects}
