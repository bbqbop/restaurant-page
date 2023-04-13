import image from './pictures/fernando-andrade-nAOZCYcLND8-unsplash.jpg';

export default function (){
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const main = document.createElement('div');
    main.classList.add('main');

    const h1 = document.createElement('h1');
    h1.textContent = 'Froutes'

    const h2 = document.createElement('h2');
    h2.textContent = 'Nothing but fruit!'

    const p = document.createElement('p');
    p.textContent = 'Browse through our sortiment and buy nothing but overpriced fruit you could get much cheaper at your local fruitstand!'

    main.append(h1, h2, p);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');
    const img = new Image();
    img.src = image;

    const photoCredit = document.createElement('p');
    photoCredit.textContent = 'photo by '

    const link = document.createElement('a');
    link.href = "https://unsplash.com/@thisisnando";
    link.textContent = 'Fernando Andrade';

    photoCredit.append(link);

    img.addEventListener('load', () => {
        imageContainer.append(img, photoCredit);
        wrapper.append(main, imageContainer);
    });

    return wrapper;
}