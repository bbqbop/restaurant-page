export default function load(){
    const content = document.createElement('div');
    content.classList.add('main');
    content.textContent = "Hello from Menu!"
    return content;
}