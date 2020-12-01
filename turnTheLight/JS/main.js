const turnOff = document.getElementById('tick');
turnOff.addEventListener('change', () => {
    document.body.classList.toggle('lightOff');
});