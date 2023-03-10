import React from 'react';

type PropsType = {
    on: boolean
}

export const OnOff = (props: PropsType) => {
    const onStyle = {
        width: '30px',
        heigth: '20px',
        border: '1px solid black'
    }
    const offStyle = {
        width: '30px',
        heigth: '20px',
        border: '1px solid black'
    }
    const indicatorStyle = {
        width: '30px',
        heigth: '30px',
        borderRadius: '15px',
        border: '1px solid black'
    }

    return <div>
        <div style={onStyle}>On</div>
        <div style={offStyle}>Off</div>
        <div></div>
    </div>
}