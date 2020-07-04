import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Filters from '../components/Filters';
import WorkList from '../components/WorkList'
import usePersistedState from './usePersistedState';

import Featured from '../components/Featured'


const useStyles = makeStyles((props) => {
	return {
		blockContainer: {
			marginBottom: '50px',
			padding: '20px',
			maxWidth: '1100px'
		},
		block: {
			padding: '10px 0 20px',
		},
		blockContainerLink: {
			borderBottom: '1px solid #000',
			color: '#000',

			'& a': {
				textDecoration: 'none',
				color: '#000',
			}
		},
		small: {
			fontSize: '.8rem'
		}
	}
});

export default function All(props) {

	const classes = useStyles();
    const [filtersList, setFilters] = useState([]);
    const [showFeatured, setShowFeatured] = useState(true);
    const [filteredList, setFilteredList] = useState([])

	
	function createMarkup(html) {
  		return {__html: html};
	}

	const featured = showFeatured && props && props.data && props.data.filter((item) => {
		return item.data.featured
	})

	const toggleShowHide = (uid) => {
		const arr = filtersList.indexOf(uid) > -1 ?
			filtersList.filter(item => item !== uid)
			:
			[...filtersList, uid]
        setFilters(arr);
        const filtered = props.data.filter((item) => {
            return arr.some(r=> item.tags.includes(r))
        })
        setFilteredList(filtered)
    };
    
    useEffect(() => {
        if(filtersList.length > 0) {
			setShowFeatured(false)
		} else {
			setShowFeatured(true)
        }
	});
	
	useEffect(() => {
		if(filtersList.length > 0) {
			filtersList.map((filter) => {
				toggleShowHide(filter);
			})
		}
	}, [])


	return (
		<>
            <Filters 
                filterToggle={((uid) => toggleShowHide(uid))}		
            />
            {showFeatured && !props.hideFeatured && <Featured data={featured} />}
			<a name="work"></a>
            <WorkList data={filteredList.length > 0 || filtersList.length > 0 ? filteredList : props.data} />
		</>
	)
};
