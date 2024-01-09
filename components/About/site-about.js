const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="components/About/site-about.css">
<div class="about">
                    <div class="about__content">
                        <h3 class="section__title">ABOUT US <span></span></h3>
                        <h2 class="section__desc">#1 Digital solution with 10 years of experience</h2>
                        <p class="section__text">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                        <div class="skills">

                            <div class="box">
                                <p>Digital Marketing</p>

                                <div class="proggress__bar-box">
                                    <div class="proggress__bar">
                                        <span class="line" style="--line-color:#6222cc"></span>
                                    </div>
                                    <p class="increasing__percentage" data-total="85%">0%</p>
                                </div>
                            </div>

                            <div class="box">
                                <p>SEO & Backlinks</p>

                                <div class="proggress__bar-box">
                                    <div class="proggress__bar">
                                        <span class="line" style="--line-color:#ffa561"></span>
                                    </div>
                                    <p class="increasing__percentage" data-total="90%">0%</p>
                                </div>
                            </div>

                            <div class="box">
                                <p>Design & Development</p>

                                <div class="proggress__bar-box">
                                    <div class="proggress__bar">
                                        <span class="line" style="--line-color:#04000b"></span>
                                    </div>
                                    <p class="increasing__percentage" data-total="95%">0%</p>
                                </div>
                            </div>
                        </div>   
                        
                        <a href="#" class="content__link">Read More</a>
                    </div>
 
                    <div class="about__cover">
                        <img src="images/about.png" alt="">
                    </div>
                </div>
`
class About extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    
        let boxes = this.shadowRoot.querySelectorAll('.box') 
        window.addEventListener('load' , () => {
            setTimeout(() => {
                loadBars()
            }, 1000);
        })

        const loadBars = () => {
            boxes.forEach(box => {
                let line = box.querySelector('.line')
                let increasingPercentage = box.querySelector('.increasing__percentage')
                
                let p = 0

                let myInterval = setInterval(() => {
                    p++
                    line.style.width = `${p}%`
                    increasingPercentage.innerHTML = `${p}%`
                
                    if(increasingPercentage.innerHTML == increasingPercentage.dataset.total){
                        clearInterval(myInterval)
                    }
                }, 25);
            })
        }
    }

    

}

export{About}