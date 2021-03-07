const white = document.querySelector('.white')
const dark = document.querySelector('.dark')
const leftBox = document.querySelector('.left-box')
const rightBox = document.querySelector('.right-box')
white.addEventListener('click', () => {
    white.classList.add('link-active');
    dark.classList.remove('link-active');
    leftBox.classList.toggle('dark-theme')
    rightBox.classList.toggle('dark-theme')
});
dark.addEventListener('click', () => {
    dark.classList.add('link-active');
    white.classList.remove('link-active');
    leftBox.classList.toggle('dark-theme')
    rightBox.classList.toggle('dark-theme')
});

