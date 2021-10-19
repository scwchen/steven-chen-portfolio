// ===========================================
// Portfolio JS
// ===========================================

const app = {};

app.stringsToType = ["Steven Chen", "a Freelancer", "a Web-Developer"];


window.addEventListener('scroll', () => {
    const toTop = document.querySelector('.to-top');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        toTop.classList.remove('hidden');
    } else {
        toTop.classList.add('hidden');
    }
});



app.typewriter = (toType) => {
    const stringArray = [...toType];


    console.log('test');
    // stringArray.forEach((char)=>{
    //     setTimeout(()=>{
    //         typewriterSpan.innerText = (typewriterSpan.innerText !== null ? typewriterSpan.innerText : '') + char;
    //     }, 500);
    // })
    // console.log(wordArray);
};

app.init = () => {
    // do some shit
    app.stringsToType.forEach((stringToType) => {
        app.typewriter(stringToType);
    });
};

// app.init();