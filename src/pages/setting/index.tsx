import React, { useState } from "react";
import { Button } from 'antd';

interface Props {
	name: string
}

interface State {
	count: number
}

const Setting: React.FC<Props> = props => {

	const initState: State = {
		count: 0
	}
	const [count, setCount] = useState(initState.count);

	return (
		<>
			<h2>hello {props.name}</h2>
			<div>
				
			</div>
		</>
	)
}

export default Setting;