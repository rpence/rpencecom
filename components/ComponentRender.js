import React from 'react';
import Embed from '../components/Embed';
import Gallery from '../components/Gallery';

export default function ComponentRender(props) {

    return (
        <>
            {props.data.map(({ slice_type, ...props }) => {
                switch (slice_type) {
                case 'gallery':
                    return Gallery(props)
                case 'embed':
                    return Embed(props)
                default:
                    return null;
                }
            })}
        </>
    );
};