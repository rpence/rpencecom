import React from 'react';
import Sketch from "react-p5";
import LazyLoad from 'react-lazyload';
import { mergeClasses } from '@material-ui/styles';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((props) => {
	return {
		large: {
			fontSize: '96px',
			position: 'absolute',
			transform: 'translate(20px, -450px)',
			color: '#fff'
		},
		desc: {
			position: 'absolute',
			width: '700px',
			transform: 'translate(60px, -190px)',
			color: '#fff'
		}
	}
})

export default function Logo(props) {

	const classes = useStyles();

	let logo;

  	const preload = (p5) => {
		logo = p5.loadModel('/static/logo.obj', true);
	}

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(canvasParentRef.clientWidth, canvasParentRef.clientWidth / 2.65, p5.WEBGL).parent(canvasParentRef)
	};


  	const draw = p5 => {
	    p5.background(20, 20, 25);
	    p5.noStroke();
	    let locX = p5.height / 2;
	    let locY = p5.width / 2;
	    p5.ambientLight(53, 53, 55);
	    p5.pointLight(255, 255, 255, locX, locY, 100);
	    p5.scale(4);
	    let timer = 0.0001 * Date.now();
	    let x = 6 * Math.cos(timer);
		let y = 4 * Math.sin(timer);
	    p5.rotateX(x);
	    p5.rotateY(y);
	    p5.fill(20, 0, 255);
		p5.ambientMaterial(190);
		p5.scale(0.2);
		logo && p5.model(logo);
  	};

    return (
        <> 
			<Sketch preload={preload} setup={setup} draw={draw} />
	    </>
    );
};