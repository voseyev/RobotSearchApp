import React from 'react'


const Card = ({id, name, email}) => {
	return (
	<div className="tc grow bg-light-green dib br3 pa3 ma2 bw2 shadow-5">
		<img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
		<div>
			<h3>{name}</h3>
			<p>{email}</p>
		</div>
	</div>
	);
}

export default Card;

