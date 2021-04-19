import PrintME from './print';
import './global.css';

function component() {
    const element = document.createElement('div');

    element.innerHTML = ['Hello', 'webpack!!', PrintME()].join(' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
