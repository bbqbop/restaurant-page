import home from './loadhome';
import menu from './loadmenu';
import contact from './loadcontact';
import './style.css';

const header = (function(){
    const header = document.createElement('div');
    header.classList.add('header');

    const btnHome = document.createElement('BUTTON');
    btnHome.innerHTML = 'Home';
    btnHome.addEventListener('click', () => load(home));

    const btnMenu = document.createElement('button');
    btnMenu.textContent = 'Menu';
    btnMenu.addEventListener('click', () => load(menu));

    const btnContact = document.createElement('button');
    btnContact.textContent = 'Contact';
    btnContact.addEventListener('click', () => load(contact));

    header.append(btnHome, btnMenu, btnContact);   
    document.body.prepend(header);
})();

const footer = (function() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const p = document.createElement('p');
    p.textContent = "© Dierk Peters 23"

    footer.append(p)
    document.body.append(footer)
})();

const content = document.querySelector('.content');

function load(element = home) {
    if (content.lastElementChild){
        content.removeChild(content.lastElementChild);
    }
    content.append(element());
}

load();



