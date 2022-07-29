import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<Shop></Shop>}></Route>
                <Route path='/home' element={<Shop></Shop>}></Route>
                <Route path='/orders' element={<Orders></Orders>}></Route>
                <Route path='/inventory' element={<Inventory></Inventory>}></Route>
            </Routes>
            <Shop></Shop>
        </div>
    );
}

export default App;
