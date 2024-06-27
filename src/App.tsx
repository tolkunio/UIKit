import s from './App.module.scss'
import {Counter} from "./components/ui";

function App() {
    return (
        <div className={s.app}>
            <Counter variant={'primary'} size={'xl'} quantity={1} stroke={true}/>
        </div>
    );
}

export default App;
