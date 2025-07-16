import { useContext } from 'react';
import style from '../components/Page.module.css'
import { ThemeContext } from '../contexts/theme-context';
import { themes } from '../contexts/themes';
import { AuthorContext } from '../contexts/author-context';

function Page() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const author = useContext(AuthorContext);

    return (
        <div style={{backgroundColor: theme.background}} className={style.container}>
            <h1 style={{color: theme.heading}} className={style.heading}>Рецепт сырников</h1>
            <p style={{color: theme.text}} className={style.paragraph}>Всё, что вам понадобится:</p>
            <ul style={{color: theme.text}} className={style.ingredients}>
                <li>Творог</li>
                <li>Куриное яйцо</li>
                <li>Мука</li>
                <li>Сахар</li>
                <li>Ванильный сахар</li>
                <li>Соль</li>
            </ul>
            <div>
                <button className={style.btn} onClick={toggleTheme}>Сменить тему на
                    {' ' + (theme === themes.light ? 'тёмную' : 'светлую')}
                </button>
            </div>
            <div style={{color: theme.text}} className={style.author}>
                Автор рецепта: {author.name}
            </div>
        </div>
    )
}

export default Page;