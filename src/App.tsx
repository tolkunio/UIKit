import s from './App.module.scss'
import {Counter} from "./components/ui";
import {Button} from "./components/ui";
import btnStyle from './components/ui/button/Button.module.scss';
function App() {
    return (
        <div className={s.app}>
            <Button variant={'primary'} buttonSize={'m'}>Скажи
                <Counter className={btnStyle.counter} quantity={3}  variant={'primary'} size={'m'}/></Button>
        </div>
    );
}

export default App;
