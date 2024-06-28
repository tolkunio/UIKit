import s from './App.module.scss'
import {Counter} from "./components/ui";

function App() {
    return (
        <div className={s.app}>
            {/*<Button variant={'primary'} buttonSize={'m'}>Скажи*/}
            {/*    <Counter className={btnStyle.counter} quantity={3}  variant={'primary'} size={'m'}/></Button>*/}
            <Counter quantity={3}  variant={'primary'} size={'s'} pulse={true}/>
        </div>
    );
}

export default App;
