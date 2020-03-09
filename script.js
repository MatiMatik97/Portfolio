const checkOffset = () => {
    const yOff = window.pageYOffset;
    const el = document.querySelector('.to-top-button');
    yOff > 200 ? el.style.bottom = "20px" : el.style.bottom = "-50px";
}
document.onscroll = () => checkOffset();
checkOffset();