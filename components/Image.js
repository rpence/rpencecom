import React from 'react';
import LazyLoad from 'react-lazyload';

export default function Image(props) {

    return (
        <>
            <img src={`http://ronnie.mydroogs.com/${props.data.image.path}`} alt="" />
        </>
    );
};