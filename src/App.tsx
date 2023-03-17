import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/OnOff/OnOff';
import {UncotrolledAccordion} from './components/Accordion/UncotrolledAccordion';
import {UncontolledRating} from './components/Rating/UncontolledRating';

function App() {
    return (
        <div className="App">
            <UncotrolledAccordion titleValue={'Menu'}/>
            <UncotrolledAccordion titleValue={'Users'}/>
            <UncontolledRating />



        </div>
    );
}


export default App