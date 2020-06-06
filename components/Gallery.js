import React from 'react';


export default function Gallery(props) {


    return (
        <>
            {props.items.map((item) => {
                return (
                    <>
                        <img src={item.image.url} />
                    </>
                )
                })}
            
        </>
    )
}