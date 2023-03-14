import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

function App() {
    return (
        <div className="App">
            <Rating value={3}/>
            <Accordion />
            <Rating valut={4}/>
        </div>
    );
}


export default App