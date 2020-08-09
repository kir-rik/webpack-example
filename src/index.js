import theAnswer from './theAnswer';
import styles from './styles.css'

{
    const getString = () => `The Answer to The Ultimate Question of Life, the Universe, and Everything is ${theAnswer}`;

    const doSomeFun = () => document.getElementById('strong').className = styles.funny;

    window.getString = getString;
    window.doSomeFun = doSomeFun;
}