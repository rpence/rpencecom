import React, { useEffect, useState } from 'react';

export default function Music(props) {

    const [tracks, setTracks] = useState();

    useEffect(() => {
		const fetchTracks = async () => {
			const result = await fetch(
				'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rpence2&api_key=f1d706c95e88df66537fd9b7b134c777&format=json',
			);
			const tracks = await result.json();
			setTracks(tracks);
		};
		fetchTracks();
	},[])

    return (
        <>
            ♫ {tracks && tracks.recenttracks && tracks.recenttracks.track[0].name} — {tracks && tracks.recenttracks && tracks.recenttracks.track[0].artist['#text']}
        </>
    )
}