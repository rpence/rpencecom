import React, {useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((props) => {
    return {
		text: {
			letterSpacing: '1.3px'
		},
		lighten: {
			opacity: '.6'
		}
	}
})
export default function Music(props) {

	const classes = useStyles();

	const [tracks, setTracks] = useState();
	const [trackName, setTrackName] = useState();
	const [trackArtist, setTrackArtist] = useState();
	const [listeningNow, setListeningNow] = useState();
	const [lastPlayed, setLastPlayed] = useState();

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


	useEffect(() => {
		setTrackName(tracks && tracks.recenttracks && tracks.recenttracks.track[0].name);
		setTrackArtist(tracks && tracks.recenttracks && tracks.recenttracks.track[0].artist['#text']);
		setListeningNow(tracks && tracks.recenttracks && tracks.recenttracks.track[0]['@attr'] && tracks.recenttracks.track[0]['@attr'].nowplaying ? true : null)
		const timeEnd = tracks && tracks.recenttracks && tracks.recenttracks.track[0] && tracks.recenttracks.track[0].date && tracks.recenttracks.track[0].date.uts.substr(0, 10);
		const timeStart = new Date();
		const timeStartEpoch = timeStart.getTime().toString().substr(0, 10);

		let seconds = Math.floor((timeStartEpoch - (timeEnd)));
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        let days = Math.floor(hours/24);
        
        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
		seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
		
		timeEnd && setLastPlayed(`Played ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds ago`)

	})

    return (
        <span className={classes.text}>
			&nbsp;&nbsp;&nbsp;&nbsp; Last Updated: Monday, 09-Aug-00 01:29:42 UTC &nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;&nbsp; Version: 1.10.1594591838982 &nbsp;&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;&nbsp; ♫ {trackName} — {trackArtist} <span className={classes.lighten}>{listeningNow ? 'Playing Now' : null}</span> <span className={classes.lighten}>{!listeningNow && lastPlayed}</span> ♫ &nbsp;&nbsp;&nbsp;&nbsp;·
        </span>
    )
}