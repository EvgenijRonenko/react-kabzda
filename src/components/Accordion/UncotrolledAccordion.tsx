import React, {useState} from 'react';
import {AccordionTitle} from './AccordionTitle';
import {AccordionBody} from './AccordionBody';

type AccordionPropsType = {
    titleValue: string

}

export const UncotrolledAccordion = (props: AccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <div>
                <AccordionTitle title={props.titleValue}/>
                <button onClick={() => { setCollapsed(!collapsed) }}>Toggle
                </button>
                {!collapsed && <AccordionBody/>}
            </div>
        </div>
    );
};

