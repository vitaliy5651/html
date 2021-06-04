document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.collapse-button');

    btn.addEventListener('click', () => {
        const cont = document.querySelector('.collapse-content');
        cont.classList.toggle('show');
        let calcHeight = cont.offsetHeight;

        cont.style.maxHeight = cont.classList.contains('show') ? calcHeight+'px'  : '0';
    })

})