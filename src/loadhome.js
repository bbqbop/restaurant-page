import image from './pictures/fernando-andrade-nAOZCYcLND8-unsplash.jpg';

export default function (){
    const wrapper = document.createElement('div');
    content.classList.add('wrapper');

    const main = document.createElement('div');
    main.classList.add('main');

    const h1 = document.createElement('h1');
    h1.textContent = 'Froutes'

    const h2 = document.createElement('h2');
    h2.textContent = 'Nothing but fruit!'

    const p = document.createElement('p');
    p.textContent = 'Browse through our sortiment and buy nothing but overpriced fruit you could get much cheaper at your local fruitstand!'

    main.append(h1, h2, p);

    const bg = document.createElement('div');
    bg.classList.add('background');
    const img = new Image();
    img.src = image;
    const imgCred = document.createElement('p');
    imgCred.textContent = "photo by Fernando Andrade"
    img.addEventListener('load', () => {
        bg.appendChild(img);
        bg.appendChild(imgCred);
        wrapper.append(main, bg);
    });

    return wrapper;
}