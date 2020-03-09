const checkOffset = () => {
    const yOff = window.pageYOffset;
    const el = document.querySelector('.to-top-button');
    yOff > 200 ? el.style.display = "block" : el.style.display = "none";
}
document.onscroll = () => checkOffset();
checkOffset();