import { FC } from 'react';
import styles from './styles.module.css';

interface IItem {
    text: string;
}

interface IProps {
    list: IItem[];
}

export const List: FC<IProps> = ({ list }) => {
    return (
        <ul className={styles.list}>
            {list.map(({ text }, i) => (
                <li key={i}>item - {text}</li>
            ))}
        </ul>
    );
};
