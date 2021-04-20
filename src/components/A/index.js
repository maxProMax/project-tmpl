import style from './styles.module.css';

export const getList = (items = []) => {
    return `<ul class=${style.list}>${items
        .map(({ text }) => `<li>${text}</li>`)
        .join('')}</ul>`;
};
