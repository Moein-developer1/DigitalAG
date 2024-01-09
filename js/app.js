import { Navbar} from "../components/Navbar/site-navbar.js"
import { Feature } from "../components/Feature/site-feature.js";
import { About } from "../components/About/site-about.js";
import { Option } from "../components/Option/site-option.js";
import { Service } from "../components/Service-section/site-service.js";
import { Newsletter } from "../components/Newsletter/site-newsletter.js";
import { Projects } from "../components/Projects/site-project.js";
import { Team } from "../components/Team/site-team.js";
import { Footer } from "../components/Footer/site-footer.js";
import { Header } from "../components/Header/site-header.js";

const loaderContainer = document.querySelector('.loader__container')
const siteContent = document.querySelector('.site__content')

const loadPage = () => {
    setTimeout(() => {
        loaderContainer.classList.add('hidden')
        siteContent.classList.remove('hidden')
    }, 1000);    

    customElements.define('site-navbar' , Navbar)
    customElements.define('site-header' , Header)
    customElements.define('site-feature' , Feature)
    customElements.define('about-us' , About)
    customElements.define('our-option' , Option)
    customElements.define('our-service' , Service)
    customElements.define('news-letter' , Newsletter)
    customElements.define('our-project' , Projects)
    customElements.define('our-team' , Team)
    customElements.define('site-footer' , Footer)
}



// preloader actions

window.addEventListener('load' , loadPage)