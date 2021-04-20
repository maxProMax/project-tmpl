import styles from './styles.module.css';

interface IItem {
    text: string;
}

export const getList = (items: IItem[] = []) => {
    return `<ul class=${styles.list}>${items
        .map(({ text }) => `<li>${text}</li>`)
        .join('')}</ul>`;
};

export default { getList };
