import React from 'react';


export default function Gallery(props) {

    return (
        <>
            <div>
                {props.data.gallery.map((image, index) => {
                    return (
                        <div>
                            <img src={`http://ronnie.mydroogs.com${image.path}`} alt="" />
                        </div>
                    )
                })}
            </div>
        </>
    );
};