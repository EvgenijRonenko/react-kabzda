import React from 'react';

type AccordionTitleType = {
    title: string
}

export const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <div>
            <h3>{props.title}</h3>

        </div>
    );
};

