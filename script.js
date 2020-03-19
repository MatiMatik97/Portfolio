// to top button
const checkOffset = () => {
    const yOff = window.pageYOffset;
    const el = document.querySelector('.to-top-button');
    yOff > 200 ? el.style.bottom = '20px' : el.style.bottom = '-50px';
}
document.onscroll = () => checkOffset();
checkOffset();

// navbar color toggler
const colors = [
    {
        primary: '#071e3d',
        secondary: '#be9d40',
        text: '#c0c0c0'
    },
    {
        primary: '#226089',
        secondary: '#f59042',
        text: '#e8ffe8'
    }
]

let currentColorNumber = 0;

const randomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    if (number !== currentColorNumber) {
        currentColorNumber = number
        return number
    } else {
        return randomNumber(min, max)
    }
}

const changeNavbarColor = () => {
    const color = colors[randomNumber(0, colors.length - 1)]
    const root = document.documentElement;
    root.style.setProperty('--navbar-primary', color.primary);
    root.style.setProperty('--navbar-secondary', color.secondary);
    root.style.setProperty('--navbar-text', color.text);
}

//project display toggler
const projectDisplay = (index, action) => {
    const projectElement = document.querySelector(`#project-display${index}`)
    const bodyElement = document.body

    if (action === 'open') {
        projectElement.style.display = 'flex'
        bodyElement.style.overflow = 'hidden'
    } else if (action === 'close') {
        projectElement.style.display = 'none'
        bodyElement.style.overflow = 'visible'
    }
}

document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {//pressed escape button
        const projectElements = [...document.querySelectorAll('.project-display')]
        projectElements.forEach(el => el.style.display = 'none')

        const bodyElement = document.body
        bodyElement.style.overflow = 'visible'
    }
});