import PrintME from './print';
import { getList } from './components/A';
import './global.css';

function component() {
    const element = document.createElement('div');

    element.innerHTML = getList([
        { text: 'A 11' },
        { text: 'A 22' },
        { text: 'A 33' },
        { text: PrintME() },
    ]);

    return element;
}

document.body.appendChild(component());
