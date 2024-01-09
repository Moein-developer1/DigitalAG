const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="components/Footer/site-footer.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

<div class="footer">
                <div class="footer__top">
                    <ul class="footer__list">
                        <h3 class="section__title">Address <span></span></h3>
                        <li class="footer__item">
                            <p><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        </li>

                        <li class="footer__item">
                            <p><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        </li>

                        <li class="footer__item">
                            <p><i class="fa fa-envelope me-3"></i>info@example.comn</p>
                        </li>

                        <div class="item__social">
                            <a href="#">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </ul>

                    <ul class="footer__list">
                        <h3 class="section__title">QUICK LINK <span></span></h3>
                    
                        <li class="footer__item">
                            <a href="#"><i class="fa-solid fa-chevron-right"></i>About Us</a>
                        </li>

                        <li class="footer__item">
                            <a href="#"><i class="fa-solid fa-chevron-right"></i>Contact Us</a>
                        </li>

                        <li class="footer__item">
                            <a href="#"><i class="fa-solid fa-chevron-right"></i>Privacy Policy</a>
                        </li>

                        <li class="footer__item">
                            <a href="#"><i class="fa-solid fa-chevron-right"></i>Terms & Condition</a>
                        </li>

                        <li class="footer__item">
                            <a href="#"><i class="fa-solid fa-chevron-right"></i>Career</a>
                        </li>
                    </ul>

                    <ul class="footer__list">
                        <h3 class="section__title">Gallery <span></span></h3>

                        <div class="footer__gallery">
                            <img src="images/portfolio-1.jpg" alt="">
                            <img src="images/portfolio-2.jpg" alt="">
                            <img src="images/portfolio-3.jpg" alt="">
                            <img src="images/portfolio-4.jpg" alt="">
                            <img src="images/portfolio-5.jpg" alt="">
                            <img src="images/portfolio-6.jpg" alt="">
                        </div>
                    </ul>

                    <ul class="footer__list">
                        <h3 class="section__title">Newsletter <span></span></h3>
                    
                        <div class="newsletter__wraper">
                            <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                            <div class="newsletter__inp-wraper">
                                <input type="text" name="" id="" placeholder="Enter your email ...">
                                <button><i class="fa fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </ul>
                </div>        

                <div class="footer__bottom">
                    <div class="copy__right">
                        <h3 class="website__developer">Website developer : <a href="#">Moien Ghiasvand</a> | &copy; All Rights Reserved</h3>
                    </div>
                </div>
            </div>
`

class Footer extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export {Footer}