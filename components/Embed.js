import React from 'react';


export default function Embed(props) {


    return (
        <>
            {props.items.map((item) => {
                return (
                    <>
                        {item.emebed_type === 'spotify' ? (
                            <>
                                <iframe src={item.embed_url.url} width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </>
                        ) : null}
                    </>
                )
                })}
            
        </>
    )
}


