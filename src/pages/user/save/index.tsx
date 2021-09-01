import React, { useState,useEffect } from "react";
import { Form, Select, Input, Modal, Row, Col } from 'antd';
import { UserData } from '../data'
interface Props {
    data: Partial<UserData>;
    close: () => void;
}

interface InitState{
    value:string;
}
const Save: React.FC<Props> = (props) => {
    const [form] = Form.useForm();
    const init:InitState={
        value:''
    }
    const[type,setType]=useState<string>();
    // useEffect(()=>{
    //     if(props.data){
    //         setType(props.data.difference?.value)
    //     }
    // },[])
    return (
        <Modal
            title={`${props.data?.id ? '编辑' : '新增'}`}
            visible
            onCancel={() => {
                props.close()
            }}
        >
            <Form form={form}>
                <Form.Item name='name' label="名字">
                    <Input defaultValue={props.data?.name}></Input>
                </Form.Item>
                <Form.Item name='number' label="评分">
                    <Input defaultValue={props.data?.number}></Input>
                </Form.Item>
                <Form.Item name='age' label="年龄">
                    <Input defaultValue={props.data?.age}></Input>
                </Form.Item>
                <Row>
                    <Col span={6}>
                        <Form.Item name='difference' label="文理">
                            <Select defaultValue={props.data.difference?.value} 
                            onChange={(e)=>{
                                    setType(e)
                            }}
                            >
                                <Select.Option value='1'>文科</Select.Option>
                                <Select.Option value='2'>理科</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    {
                        type==='1' && <Col span={12} style={{paddingLeft:10}}>
                            <Form.Item name='calss' label="文科班级" >
                                <Select defaultValue={props.data.class?.toString()}>
                                    <Select.Option value='1'>文科一班</Select.Option>
                                    <Select.Option value='2'>文科二班</Select.Option>
                                    <Select.Option value='3'>文科三班</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    }
                    {
                        type==='2' && <Col span={12} style={{paddingLeft:10}}>
                            <Form.Item name='calss' label="理科班级" >
                                <Select defaultValue={props.data.class?.toString()}>
                                    <Select.Option value='1'>理科一班</Select.Option>
                                    <Select.Option value='2'>理科二班</Select.Option>
                                    <Select.Option value='3'>理科三班</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    }
                </Row>
            </Form>
        </Modal>
    )
}
export default Save;