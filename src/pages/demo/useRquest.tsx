import React ,{useState}from "react";
import {useRequest} from 'ahooks';
import {Input,Button,message } from 'antd';

function change(username: string): Promise<{ success: boolean }> {
    console.log(username);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  }


const Request: React.FC<{}> = () => {
    const [value,setValue]=useState('');
    const {run} = useRequest(change,{
        manual:true,
        onSuccess:(result, params)=>{
            if(result.success){
                message.success(`查询参数${params}`)
                setValue('')
            }
        }
    })
    
    return(
        <>
            <Input 
            value={value}
            onChange={(e)=>{
                setValue(e.target.value)
            }}></Input>
            <Button type='primary' style={{marginTop:10}}
                onClick={()=>{
                    run(value)
                    
                }}
            >模拟查询</Button> 
        </>
    )
};

export default Request;