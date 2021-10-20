// ===========================================
// Portfolio JS
// ===========================================

const app = {};

// Typewriter variables
app.strings = ["I am a learner", "I am a movie nerd", "I am Dark Mode", "I am a Web Developer", "I'm Steven Chen"];
app.sIndex = 0;
app.textPosition = 0;
app.speed = 75;
app.h1 = document.querySelector('.typewriter');

app.init = () => {

    app.addWindowEventListeners();
    app.skillContainerListener();
    app.toggleEventListener();
};

// ===========================================
// TYPEWRITER functions
// ===========================================

app.typewriter = () => {
    app.h1.innerHTML = app.strings[app.sIndex].substring(0, app.textPosition) + '<span class="blinker">&#124</span>';
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

    if (dark.classList.contains('chosen')) {
        // dark.classList.remove('chosen');
        // do some light mode shit
    } else {
        // toggle.classList.add('chosen');
        // do some dark mode shit
    }

    dark.classList.toggle('chosen');
    light.classList.toggle('chosen');

};

app.toggleEventListener = () => {
    const darkToggle = document.querySelector('.toggle-dark');
    darkToggle.addEventListener('click', app.toggleDarkMode);
}


app.init();