const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="components/Team/site-team.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
<div class="our__team">
                    <div class="team__member">
                        <div class="member__info">
                            <div class="member__cover">
                                <img src="images/team-1.jpg" alt="">
                            </div>

                            <h3 class="member__name">John Doe</h3>
                            <h4 class="member__task">CEO & Founder</h4>
                        </div>

                        <div class="member__socials">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div class="team__member">
                        <div class="member__info">
                            <div class="member__cover">
                                <img src="images/team-2.jpg" alt="">
                            </div>

                            <h3 class="member__name">Jessica Brown</h3>
                            <h4 class="member__task">Web Designer</h4>
                        </div>

                        <div class="member__socials">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    <div class="team__member">
                        <div class="member__info">
                            <div class="member__cover">
                                <img src="images/team-3.jpg" alt="">
                            </div>

                            <h3 class="member__name">Tony Johnson</h3>
                            <h4 class="member__task">SEO Expert</h4>
                        </div>

                        <div class="member__socials">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
`

class Team extends HTMLElement {
    constructor () {
        super()
        
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export {Team}