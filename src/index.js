import home from './loadhome';
import menu from './loadmenu';
import contact from './loadcontact';

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

const content = document.querySelector('.content');

function load(element) {
    if (content.lastElementChild){
        content.removeChild(content.lastElementChild);
    }
    content.append(element());
}



