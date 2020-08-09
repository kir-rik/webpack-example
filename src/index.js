import theAnswer from './theAnswer';
import icon from './icon.svg'
import styles from './styles.css'

{
    const getString = () => `The Answer to The Ultimate Question of Life, the Universe, and Everything is ${theAnswer}`;

    const doSomeFun = () => document.getElementById('strong').className = styles.funny;

    const addIcon = () => {
        const iconContainer = document.createElement('div');
        iconContainer.style="width: 100px; height: 100px;"
        iconContainer.innerHTML = icon;
        document.body.append(iconContainer);
    }

    window.getString = getString;
    window.doSomeFun = doSomeFun;
    window.addIcon = addIcon;
}