import React from 'react';
import LazyLoad from 'react-lazyload';

export default function Image(props) {

    return (
        <>
            <LazyLoad height={200} offset={-100}>
                <img src={`http://ronnie.mydroogs.com/${props.data.image.path}`} alt="" />
            </LazyLoad>
        </>
    );
};