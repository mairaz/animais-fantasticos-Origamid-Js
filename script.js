function tabActive() {
    const menuTab = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo');

    if (menuTab.length && tabContent.length) {

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        menuTab.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index);
            });
        })
    }
}
tabActive();

function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt');
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');


    function activeAccordion() {
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    })
}


initAccordion();

function slideDown() {
    const linkMenu = document.querySelectorAll('.js-menu a[href^="#"]');
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
        //forma alternativa
        //const topo = section.offsetTop;
        //window.scrollTo({
        // top: topo,   
        // behavior:'smooth'})
    }

    linkMenu.forEach((link) => {
        link.addEventListener('click', slideDown);
    })
}
slideDown();

function initAnimacaoScroll(){


    const sections = document.querySelectorAll('.js-scroll');
    const windowMetade = window.innerHeight * 0.8;


    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top ;
            
            let isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible)
            section.classList.add('ativo');
            else
            section.classList.remove('ativo')
            
        })
    }
    animaScroll()


    window.addEventListener('scroll', animaScroll);
    
}
initAnimacaoScroll();
