import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	const cardarray = robots.map((user,i) => {
		return <Card key={i} name={robots[i].name} id={robots[i].id} email={robots[i].email} />
	});
	return(
		<div>
			{cardarray}
		</div>
	);
}

export default CardList;