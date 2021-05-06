const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = ['HTML5', 'CSS3', 'JavaScript'];

let indexWord = 0;
let indexText = -15;

const addLetter = () => {
    if (indexText >= 0) {
        spanText.textContent += txt[indexWord][indexText];
    };
    indexText++;
    if (indexText === txt[indexWord].length) {
        indexWord++;
        if (indexWord === txt.length) return;
        return setTimeout(() => {
            indexText = -15;
            spanText.textContent = '';
            addLetter();
        }, 2000)
    }
    setTimeout(addLetter, 100);
}

const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
};
setInterval(cursorAnimation, 400);
addLetter();