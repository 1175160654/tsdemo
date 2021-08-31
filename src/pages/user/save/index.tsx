import React, { useState } from "react";
import { Form, Select, Input,Modal } from 'antd';
import { UserData } from '../data'
interface Props{
   data:UserData;
}

const Save:React.FC<Props> = (props)=>{
    const [form] = Form.useForm()
    return(
        <Modal
            title={`${props.data? '编辑':'新增'}`}
            visible
        >
            <Form form={form}>
                
            </Form>
        </Modal>
    )
}
export default Save;