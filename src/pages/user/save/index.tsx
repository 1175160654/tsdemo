import React, { useState,useEffect } from "react";
import { Form, Select, Input, Modal, Row, Col } from 'antd';
import { UserData } from '../data'
interface Props {
    data: Partial<UserData>;
    close: () => void;
}

const Save: React.FC<Props> = (props) => {
    const [form] = Form.useForm();
    const initialValues= {
        id:props.data.id ||'',
        name: props.data.name ||'',
        number:props.data.number||'',
        age:props.data.age|| '',
        difference:props.data.difference?.value || '',
        class:props.data.class?.toString()|| ''
    }
    const[type,setType]=useState<string>();
    const onOk=()=>{
        const data = form.getFieldsValue();
        console.log(data)
    }
    useEffect(()=>{
        if(props.data){
            setType(props.data.difference?.value)
        }
    },[])
    return (
        <Modal
            title={`${props.data?.id ? '编辑' : '新增'}`}
            visible
            onCancel={() => {
                props.close()
            }}
            onOk={onOk}
        >
            <Form form={form} initialValues={initialValues}>
                <Form.Item name='name' label="名字" >
                    <Input></Input>
                </Form.Item>
                <Form.Item name='number' label="评分">
                    <Input ></Input>
                </Form.Item>
                <Form.Item name='age' label="年龄">
                    <Input ></Input>
                </Form.Item>
                <Row>
                    <Col span={6}>
                        <Form.Item name='difference' label="文理">
                            <Select 
                            onChange={(e)=>{
                                    console.log(typeof(e))
                                    console.log(e?.toString())
                                    setType(e?.toString())
                            }}
                            >
                                <Select.Option value='1'>文科</Select.Option>
                                <Select.Option value='2'>理科</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    {
                        type==='1' && <Col span={12} style={{paddingLeft:10}}>
                            <Form.Item name='class' label="文科班级" >
                                <Select >
                                    <Select.Option value='1'>文科一班</Select.Option>
                                    <Select.Option value='2'>文科二班</Select.Option>
                                    <Select.Option value='3'>文科三班</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    }
                    {
                        type==='2' && <Col span={12} style={{paddingLeft:10}}>
                            <Form.Item name='class' label="理科班级" >
                                <Select >
                                    <Select.Option value='4'>理科一班</Select.Option>
                                    <Select.Option value='5'>理科二班</Select.Option>
                                    <Select.Option value='6'>理科三班</Select.Option>
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