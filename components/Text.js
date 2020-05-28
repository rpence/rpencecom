import React from 'react';

export default function Text(props) {

    function createMarkup(html) {
        return {__html: html};
    }

    return (
        <>
            <div dangerouslySetInnerHTML={createMarkup(`${props.data.text}`)} />
        </>
    );
};