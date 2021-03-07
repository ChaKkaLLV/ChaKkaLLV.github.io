const white = document.querySelector('.white')
const dark = document.querySelector('.dark')
const leftBox = document.querySelector('.left-box')
const rightBox = document.querySelector('.right-box')
white.addEventListener('click', () => {
    white.classList.add('link-active');
    dark.classList.remove('link-active');
    leftBox.classList.remove('dark-theme')
    rightBox.classList.remove('dark-theme')
});
dark.addEventListener('click', () => {
    dark.classList.add('link-active');
    white.classList.remove('link-active');
    leftBox.classList.add('dark-theme')
    rightBox.classList.add('dark-theme')
});

