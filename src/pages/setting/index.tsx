import React, { useState ,useEffect} from "react";
import { Row, Col ,Button} from 'antd';
import Item from "antd/lib/list/Item";

const Setting: React.FC<{}> = props => {
	const arrFlat = [1, [2, [3, [4, 5]]], 6];
	const arrDouble = [1,1,2,2,3,3];
	//扁平
	const flatArr=(arr:any)=>{
		while (arr.some((item:any) => Array.isArray(item))) {
			arr = [].concat(...arr);
			console.log(arr)
		}
		return arr;
	}
	return (
		<>
			<Row>
				<Col>
					<div>数组扁平:[1, [2, [3, [4, 5]]], 6]</div>
					<Button type='primary' onClick={()=>{
						const res = arrFlat.flat(3)
						console.log(res)
					}}>方法一</Button>
					<Button type='primary' style={{marginLeft:5}} onClick={()=>{
						flatArr(arrFlat)
					}}>方法二</Button>
				</Col>
				<Col style={{marginLeft:20}}>
					<div>数组去重:[1,1,2,2,3,3]</div>
					<Button type='primary' onClick={()=>{
						const res=new Set(arrDouble)
						console.log(Array.from(res))
					}}>方法一</Button>
					<Button type='primary' style={{marginLeft:5}} onClick={()=>{
					}}>方法二</Button>
				</Col>
			</Row>	
		</>
	)
}

export default Setting;