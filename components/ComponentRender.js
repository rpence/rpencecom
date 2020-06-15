import React from 'react';
import Embed from '../components/Embed';
import Gallery from '../components/Gallery';
import VideoGallery from '../components/VideoGallery';
import TextBlock from '../components/TextBlock';

export default function ComponentRender(props) {

    return (
        <>
            {props.data.map(({ slice_type, ...props }) => {
                switch (slice_type) {
                case 'gallery':
                    return Gallery(props)
                case 'video_gallery':
                        return VideoGallery(props)
                case 'embed':
                    return Embed(props)
                case 'text_block':
                    return TextBlock(props)
                default:
                    return null;
                }
            })}
        </>
    );
};