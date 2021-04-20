import { FC } from 'react';
import { List } from './components/A';

export const App: FC = () => {
    return (
        <div>
            Hello React + Typescript
            <List list={[{ text: '12' }, { text: '13' }]} />
            <button>asd</button>
        </div>
    );
};
