import React from 'react';

export const Rating = (props: any) => {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );
};

export const Star = (props: any) => {
    return (
                <div>
                    props.selected === true
                    ? return <span><b>star </b></span>
                    : <span>star </span>

        </div>
    )
}