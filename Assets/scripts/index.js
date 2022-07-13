document.addEventListener('click', (event) => {

    if (!event.target.matches('#icon')) return;
    event.preventDefault();

    const element = document.getElementById('notificationBar');
    const btn = document.getElementById('icon');
    const notific = document.getElementById('notification');

    btn.classList.toggle("isOpen");
    element.classList.toggle("isOpen");
    notific.classList.toggle('isOpen');

}, false);


document.addEventListener('click', (event) => {

    if ( !event.target.matches('#openCloseNav')) return;
    event.preventDefault();

    const element = document.getElementById('nav');
    const content = document.getElementById('content');

    element.classList.toggle('isClosed');
    content.classList.toggle('isClosed');
}), false;