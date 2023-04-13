import strawberry from './/pictures/allec-gomes-xnRg3xDcNnE-unsplash.jpg';
import banana from './/pictures/charlesdeluvio-0v_1TPz1uXw-unsplash.jpg';
import mandarine from './/pictures/mae-mu-U1iYwZ8Dx7k-unsplash.jpg';
import apple from './/pictures/nikolai-chernichenko-hFBsF-CX5eQ-unsplash.jpg';


export default function load(){
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');

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

    const fruits = [
        {
        img: strawberry,
        fruit: 'Strawberry',
        name: 'Alec Gomez', 
        link: 'https://unsplash.com/@allecgomes',
        text: "Juicy, sweet, and irresistibly delicious, strawberries are a summer favorite that can be enjoyed all year round. Whether eaten fresh or added to salads, desserts, or smoothies, their bright red color and juicy texture make them a crowd-pleaser."
        },{
        img: banana, 
        fruit: 'Banana',
        name: 'Charles Deluvio',
        link: 'https://unsplash.com/@charlesdeluvio',
        text: 'This sweet and creamy fruit is a delicious source of potassium and fiber. Its soft texture and slightly nutty flavor make it the perfect addition to smoothies, oatmeal, and baked goods.'
        },{ 
            img: apple,
            fruit: 'Apple',
            name: 'Nikolai Chernichenko',
            link: 'https://unsplash.com/@perfectcoding',
            text: "Crisp, juicy, and bursting with flavor, apples are a classic fruit that never goes out of style. With a perfect balance of sweetness and tartness, they're the ideal snack for any time of day."
        },{ 
        img: mandarine,
        fruit: 'Mandarine',
        name: 'Mae Mu',
        link: 'https://unsplash.com/@picoftasty',
        text: "Sweet and tangy, mandarins are a small citrus fruit that are bursting with flavor. They're easy to peel and make a great snack on-the-go."
        }
    ]

    for (let i = 0; i < fruits.length; i++){
        const item = document.createElement('div');
        item.classList.add('item');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('imageContainer');

        const img = new Image();
        img.src = fruits[i].img;

        const photoCredit = document.createElement('p');
        photoCredit.textContent = 'photo by '

        const link = document.createElement('a');
        link.href = fruits[i].link;
        link.textContent = fruits[i].name;

        photoCredit.append(link);

        const textContainer = document.createElement('div');
        textContainer.classList.add('textContainer');

        const h2 = document.createElement('h2');
        h2.textContent = fruits[i].fruit;

        const text = document.createElement('p');
        text.textContent = fruits[i].text;

        img.addEventListener('load', () => {
            imgContainer.append(img, photoCredit);
            textContainer.append(h2, text);
            item.append(imgContainer, textContainer);
        })

        menuContainer.append(item);
    }

    return menuContainer;
}


