if (document.querySelector('.js-header')) {
    const header = document.querySelector('.js-header');
    const headerBurger = document.querySelector('.header__burger');
    const body = document.querySelector('body');
    const headerLink = document.querySelectorAll('.header__nav-link')

    headerLink.forEach(item => {
        item.addEventListener('click', getNavItemAttribute );
    })

    function getCoordinates(e,behavior) {e.preventDefault();
        let target = e.target.getAttribute('data-attribute');
            // let getSectionCoordinates = document.getElementById(`${target}`).getBoundingClientRect();
            let getSectionCoordinates = document.getElementById(`${target}`).offsetTop;
            const headerHeight = document.querySelector('.header').clientHeight;
            window.scrollTo({
                // top: window.pageYOffset + getSectionCoordinates.y - headerHeight + "px",
                top: getSectionCoordinates - headerHeight,
                behavior: behavior
            })
    }

    function getNavItemAttribute(e) {
        // headerLink.forEach(item=>{
        //     item.classList.remove('is-active')
        // })
        // e.target.classList.add('is-active')
        if(!header.classList.contains('is-active')) {
            e.preventDefault();
            getCoordinates(e,'smooth');
        } else {
            e.preventDefault();
                body.classList.remove('is-lock');
                header.classList.remove('is-active');
                headerBurger.classList.remove('is-active');
                getCoordinates(e,'instant');
        }
        
    }

    window.addEventListener('scroll', aaa)

    // window.addEventListener('resize', aaa)
    // function aaa() {
    //     let a = document.getElementById('about').scrollHeight;
    //     let b = document.getElementById('about').offsetTop;console.log(b - scrollY)
    //     let c = document.querySelector('.header').clientHeight;
    //     if(b - c - scrollY < 1 && b - c + a - scrollY > 1) {
    //         document.querySelector('[data-attribute="about"]').style.color = "#FEB11E";
    //     } else {
    //         document.querySelector('[data-attribute="about"]').style.color = "";
    //     }
    // }

    function aaa() {
        const homeOffsetTop = document.getElementById('home').offsetTop;
        const aboutOffsetTop = document.getElementById('about').offsetTop;
        const skillsOffsetTop = document.getElementById('skills').offsetTop;
        const projectsOffsetTop = document.getElementById('projects').offsetTop;
        const contactsOffsetTop = document.getElementById('contacts').offsetTop;

        const homeScrollHeight = document.getElementById('home').scrollHeight;
        const aboutScrollHeight = document.getElementById('about').scrollHeight;
        const skillsScrollHeight = document.getElementById('skills').scrollHeight;
        const projectsScrollHeight = document.getElementById('projects').scrollHeight;
        const contactsScrollHeight = document.getElementById('contacts').scrollHeight;

        const headerHeight = document.querySelector('.header').clientHeight;

        if(homeOffsetTop - headerHeight - scrollY < 1 && homeOffsetTop - headerHeight + homeScrollHeight - scrollY > 1) {
                    document.querySelector('[data-attribute="home"]').style.color = "#FEB11E";
                } else {
                    document.querySelector('[data-attribute="home"]').style.color = "";
                }

        if(aboutOffsetTop - headerHeight - scrollY < 1 && aboutOffsetTop - headerHeight + aboutScrollHeight - scrollY > 1) {
            document.querySelector('[data-attribute="about"]').style.color = "#FEB11E";
        } else {
            document.querySelector('[data-attribute="about"]').style.color = "";
        }

        if(skillsOffsetTop - headerHeight - scrollY < 1 && skillsOffsetTop - headerHeight + skillsScrollHeight - scrollY > 1) {
            document.querySelector('[data-attribute="skills"]').style.color = "#FEB11E";
        } else {
            document.querySelector('[data-attribute="skills"]').style.color = "";
        }

        if(projectsOffsetTop - headerHeight - scrollY < 1 && projectsOffsetTop - headerHeight + projectsScrollHeight / 3 - scrollY > 1) {
            document.querySelector('[data-attribute="projects"]').style.color = "#FEB11E";
        } else {
            document.querySelector('[data-attribute="projects"]').style.color = "";
        }

        if(contactsOffsetTop - projectsScrollHeight / 1.5 - headerHeight - scrollY < 1 && contactsOffsetTop - headerHeight + contactsScrollHeight - scrollY > 1) {
            document.querySelector('[data-attribute="contacts"]').style.color = "#FEB11E";
        } else {
            document.querySelector('[data-attribute="contacts"]').style.color = "";
        }
    }
}