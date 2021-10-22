// ===========================================
// Portfolio JS
// ===========================================

const app = {};

// Typewriter variables
app.strings = ["I am a Web Developer", "I am a Lifelong Learner", "I am a Movie Nerd", "I am Dark Mode", "I am a Web Developer", "I am Steven Chen"];
app.sIndex = 0;
app.textPosition = 0;
app.speed = 75;
app.typedHeading = document.querySelector('.typewriter');

app.init = () => {

    app.addWindowEventListeners();
    app.skillContainerListener();
    app.toggleEventListener();
    app.menuEventListener();
    app.menuItemEventListener();
};

// ===========================================
// TYPEWRITER functions
// ===========================================

app.typewriter = () => {

    app.typedHeading.innerHTML = app.strings[app.sIndex].substring(0, app.textPosition) + '<span class="blinker">&#124</span>';

    if (app.textPosition++ != app.strings[app.sIndex].length) {
        setTimeout(app.typewriter, app.speed);
    }
}

// Async await only works with promises so we make a new promise
app.typeDelay = (ms) => {
    return new Promise((res) => {
        setTimeout(res, ms);
    });
}

// Create the loop of writing out the phrases continuously
app.introText = async () => {
    for (let i = 0; i < app.strings.length; i++) {
        app.typewriter();
        await app.typeDelay(app.strings[i].length * app.speed + 1500);
        app.textPosition = 0;
        ++app.sIndex;
    }

    // to loop infinitely
    await app.typeDelay(5000);
    app.sIndex = 0;
    app.introText();
}

// ===========================================
// end of Typewriter functions
// ===========================================


app.skillContainerListener = () => {
    const skills = document.querySelectorAll('.skill-container');

    skills.forEach((skill) => {
        skill.addEventListener('mouseenter', function () {
            this.querySelector('i').classList.add('colored');
        });
        skill.addEventListener('mouseleave', function () {
            this.querySelector('i').classList.remove('colored');
        });
    });
};

app.addWindowEventListeners = () => {
    const toTop = document.querySelector('.to-top');

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            toTop.classList.remove('hidden');
        } else {
            toTop.classList.add('hidden');
        }
    });

    window.addEventListener("load", app.introText);

};

app.toggleDarkMode = () => {
    const dark = document.querySelector('.fa-moon');
    const light = document.querySelector('.fa-sun');

    // This is a real brute force way of doing things. I just wanted to see if it would work. 
    // I think I will have to use rooted css variables rather than sass ones for the dark mode toggle.
    const sections = document.querySelectorAll('section');
    const projects = document.querySelectorAll('.project-info');
    const inputs = document.querySelectorAll('.contact-form input');
    const skills = document.querySelectorAll('.skill-container');
    const home = document.querySelector('.home');
    const textarea = document.querySelector('.contact-form textarea');
    const contactMe = document.querySelectorAll('.contact-me i');
    const calendly = document.querySelector('.contact-me .book-appt');


    const elementsToToggle = [...sections, ...projects, ...inputs, ...skills, ...contactMe, calendly, home, textarea];

    elementsToToggle.forEach((element) => {
        element.classList.toggle('light-mode');
    })

    dark.classList.toggle('chosen');
    light.classList.toggle('chosen');

};

app.toggleEventListener = () => {
    const darkToggle = document.querySelector('.toggle-dark');
    darkToggle.addEventListener('click', app.toggleDarkMode);
};

app.menuShow = () => {
    const headerNav = document.querySelector('.header-nav')

    if (headerNav.style.maxHeight) {
        headerNav.style.maxHeight = null;
    } else {
        headerNav.style.maxHeight = `${headerNav.scrollHeight}px`;
    }
}

// Adding event listen to hide the menu when any of the nav list items are selected
app.menuItemEventListener = () => {
    const navList = document.querySelectorAll('.header-nav-list a');

    navList.forEach((navItem) => {
        navItem.addEventListener('click', app.menuShow);
    });
}
// Adding event listener to the show menu on mobile
app.menuEventListener = () => {
    const menuButton = document.querySelector('.hamburger-menu');
    const menuIcon = document.querySelector('.hamburger-menu i')


    menuButton.addEventListener('click', () => {
        if (menuIcon.classList.contains('fa-bars')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        }
        app.menuShow();
    });
}

AOS.init();
app.init();