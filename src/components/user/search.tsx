import React,{useState} from "react";
import { Form, Select, Input, Button } from 'antd';
interface Props {

}

const Search: React.FC<Props> = props => {
    const [form] = Form.useForm();
    const [data , setData]=useState({})
    return (
        <div>
            <Form layout="inline" form={form} >
                <Form.Item name="name">
                    <Input placeholder="姓名" style={{ width: 120 }} allowClear />
                </Form.Item>
                <Form.Item name='class'>
                    <Select placeholder="班级" style={{ width: 120 }} allowClear>
                        <Select.Option value={1}>一班</Select.Option>
                        <Select.Option value={2}>二班</Select.Option>
                        <Select.Option value={3}>三班</Select.Option>
                    </Select>
                </Form.Item>
                <Button type="primary" onClick={()=>{
                        const fromData= form.getFieldsValue();
                        console.log(fromData)
                    }}>查询</Button>
            </Form>
        </div>
    )
}
export default Search;