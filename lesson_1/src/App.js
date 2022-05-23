import './App.css';
import Tesla from "./components/tesla.main";

function App() {
    return (
        <div>
            <Tesla
                description={'Tesla X'}
                image={'https://cdn.maximonline.ru/6d/32/e1/6d32e192a3faef9557bd79df00439dd0/620x429_1_f4410097b9e5d2405dad6274fae64c42@960x664_0xac120005_11750064571529047473.jpg'}/>
            <Tesla
                description={'Tesla S'}
                image={'https://infocity.az/wp-content/uploads/2020/06/Tesla-Model-S.jpg'}/>
            <Tesla
                description={'Tesla Y'}
                image={'https://moscowteslaclub.ru/upload/resize_cache/iblock/6d1/495_293_2/6d137ebab87f6e2faf6245d602502e3f.JPG'}/>
            <Tesla
                description={'Tesla E'}
                image={'https://eimg.pravda.com/images/doc/e/e/ee5cff6-2020-tesla-roadster-2.jpg'}/>
        </div>
    );
}

export default App;
