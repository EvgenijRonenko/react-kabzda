import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    value: boolean

}

export const OnOff = (props: OnOffPropsType) => {
    if (props.value === true) {
        return (
            <div>
                <button className={s.green}>On</button>
                <button className={s.greener}></button>
            </div>)
    }
    else  {
    return  <div>
        <button className={s.red}>Off</button>
        <button className={s.reder}></button>
    </div>
}



};

