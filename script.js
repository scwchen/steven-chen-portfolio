// ===========================================
// Portfolio JS
// ===========================================

const app = {};

app.stringsToType = ["Steven Chen", "a Freelancer", "a Web-Developer"];

app.init = () => {
    // do some shit
    // app.stringsToType.forEach((stringToType) => {
    //     app.typewriter(stringToType);
    // });
    app.navButtonListener();
    // app.projectModal();
    app.skillContainerListener();
};

app.navButtonListener = () => {
    const toTop = document.querySelector('.to-top');
    
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            toTop.classList.remove('hidden');
        } else {
            toTop.classList.add('hidden');
        }
    });
};

app.skillContainerListener = () =>{
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


// app.projectModal = () => {
//     const projectButton = document.querySelector('.project-button');
//     const modal = document.querySelector('.modal');
//     const modalClose = document.querySelector('.close-modal');
//     const body = document.querySelector('body');

//     projectButton.addEventListener('click', () => {
//         // body.classList.add('modal-open');
//         modal.classList.remove('hidden');
//     });

//     modalClose.addEventListener('click', () => {
//         // body.classList.remove('modal-open');
//         modal.classList.add('hidden');
//     });
// };



// app.typewriter = (toType) => {
//     const stringArray = [...toType];

//     console.log('test');
//     // stringArray.forEach((char)=>{
//     //     setTimeout(()=>{
//     //         typewriterSpan.innerText = (typewriterSpan.innerText !== null ? typewriterSpan.innerText : '') + char;
//     //     }, 500);
//     // })
//     // console.log(wordArray);
// };



app.init();