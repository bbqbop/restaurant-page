export default function (){
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');

    const title = document.createElement('div');
    title.classList.add('title');

    const h1 = document.createElement('h1');
    h1.textContent = 'Froutes'

    const h2 = document.createElement('h2');
    h2.textContent = 'Leave a message!'

    title.append(h1, h2);
    
    const contactForm = (function() {
        const form = document.createElement('form');
        form.classList.add('contactForm');

        const fieldSet = document.createElement('fieldset');
            
        function createInput(labelText,elementType,inpType,className){
            const label = document.createElement('label');
            label.classList.add(className);
            label.textContent = labelText;

            const inp = document.createElement(elementType);
            if(inpType){
                inp.type = inpType;
            }
            inp.name = className;

            label.append(inp);
            fieldSet.append(label);
        }

        createInput('First Name: ', 'input', 'text', 'firstName');
        createInput('Last Name: ', 'input', 'text', 'lastName');
        createInput('Email: ', 'input', 'email', 'email');
        createInput('Message: ', 'textarea', false , 'msg');
        createInput('', 'input', 'submit', 'submit')

        form.append(fieldSet);

        return form;
    })();

    const addressInfo = document.createElement('div');
    addressInfo.classList.add('addressInfo');
    addressInfo.innerText = 'Froutes\n1234 Berry Street\n Big Apple \n NY 11220'

    contactContainer.append(title, contactForm, addressInfo);

    return contactContainer;
}