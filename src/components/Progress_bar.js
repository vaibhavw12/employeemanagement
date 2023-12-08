// Filename - Progress_bar.js

import React from 'react'

const Progress_bar = ({bgcolor,progress}) => {
	
	const Parentdiv = {
		height: 15,
		width: '90%',
		borderRadius: 40,
		
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius:40,
		textAlign: 'right',
		border : 'solid 1px green'
	}	
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
	</div>
	</div>
	)
}

export default Progress_bar;
