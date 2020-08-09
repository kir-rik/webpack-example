import theAnswer from './theAnswer';

{
    const getString = () => `The Answer to The Ultimate Question of Life, the Universe, and Everything is ${theAnswer}`;

    window.getString = getString;
}