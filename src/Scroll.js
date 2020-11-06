import React from 'react';

const Scroll = (props) => {
	return(
		<div style={{overflowY : 'scroll', border : '1px solid black', height:'450px', width: '90%' , margin: '0 auto' }} >
		{props.children}
		</div>
	);
}

export default Scroll;