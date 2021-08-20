import React, { useState } from "react";
import { Button } from 'antd';

interface Props {
	name: string
}

interface State {
	count: number
}

const Hello: React.FC<Props> = props => {

	const initState: State = {
		count: 0
	}
	const [count, setCount] = useState(initState.count);

	return (
		<>
			<h2>holle {props.name}</h2>
			<div>
				
			</div>
		</>
	)
}

export default Hello;