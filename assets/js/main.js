    /*MENU SHOW Y HIDDEN*/
    const navMenu = document.getElementById('nav-menu'),
            navToggle = document.getElementById('nav-toggle'),
            navClose = document.getElementById('nav-close')

    /*SHOW MENU*/
    if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
    }

    /*CLOSE MENU*/
    if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu')

        })
    }

    /*REMOVE MENU MOBILE*/
    const navLink = document.querySelectorAll('.nav__link')
    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        //Khi click vao moi nav_link, se xoa lop show-menu
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    /*==========SERVICES MODAL==============*/
    const modalViews = document.querySelectorAll('.services_modal'),
        modalBtns = document.querySelectorAll('.services_button'),
        modalClose = document.querySelectorAll('.services_modal-close')

    let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-modal')

    }

    modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener('click', ()=>{
            modal(i)
        })
    })
    modalClose.forEach((modalClose) =>{
        modalClose.addEventListener('click', ()=>{
            modalViews.forEach((modalView)=>{
                modalView.classList.remove('active-modal')
            })
        })
    })

    /*==========PORTFOLIO SWIPER============*/
    let swiper = new Swiper(".portfolio_container", {
        cssMode: true,
        loop:true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
    /*==========SCROLL SECTIONS ACTIVE LINKS============*/
    const sections = document.querySelectorAll('section[id]')
    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

            }
        })
    }
    window.addEventListener('scroll', scrollActive)

    /*==========CHANGE BACKGROUND HEADER============*/
    function scrollHeader(){
        const nav =document.getElementById('header')
        if(this.scrollY >= 80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    /*==========SHOW SCROLL UP============*/
    function scrollUp() {
        const scrollUp = document.getElementById('scroll-up');
        if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)

     /*==========DARK LIGHT THEME============*/
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'bx-moon' : 'bx-sun'

    if(selectedTheme){
        document.body.classList[selectedTheme === 'dark'? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'bx-moon'? 'add' : 'remove'](iconTheme)
    }
    themeButton.addEventListener('click', () =>{
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })

    




