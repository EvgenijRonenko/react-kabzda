import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    value: boolean

}

export const OnOff = (props: OnOffPropsType) => {
    let [on, setOn] = useState(false);
    const onStyle = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicator = {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green': 'red'
    }

    return <div>
        <div style={onStyle} onClick={() => {setOn(true)}}>On</div>
        <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
        <div style={indicator}></div>
    </div>


};

