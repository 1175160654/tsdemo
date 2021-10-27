import React, { useState } from "react";
import SearchFrom from "../../components/searchFrom";
import { Table, Divider, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { UserData } from './data'
import "./index.css";
import Detail from './detail/index'
import Save from './save/index'
interface Props { }

const User: React.FC<Props> = props => {
    const [detail, setDetail] = useState(false);
    const [data, setData] = useState({});
    const[savevisible, setSavevisible]= useState(false);
    const datalist = [
        {
            id: '100',
            number: '77',
            name: '张三',
            age: 18,
            difference:{
                key:'文科',
                value:'1'
            },
            class: 1,
        },
        {
            id: '101',
            number: '55',
            name: '李四',
            age: 18,
            difference:{
                key:'文科',
                value:'1'
            },
            class: 2,
        },
        {
            id: '102',
            number: '89',
            name: '王',
            age: 17,
            difference:{
                key:'理科',
                value:'2'
            },
            class: 5
        },
        {
            id: '103',
            number: '89',
            name: '王',
            age: 18,
            difference:{
                key:'理科',
                value:'2'
            },
            class: 6
        }
    ]
    const columns: ColumnsType<UserData> = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            width: 200
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            align: 'center',
            width: 200
        },
        {
            title: '文理',
            dataIndex: 'difference',
            key: 'difference',
            align: 'center',
            width: 200,
            render:(record:any)=><>{record.key}</>
        },
        {
            title: '班级',
            dataIndex: 'class',
            key: 'class',
            align: 'center',
            width: 200
        },
        {
            title: '评分',
            dataIndex: 'number',
            key: 'number',
            align: 'center',
        },
        {
            title: '操作',
            align: 'center',
            render: (record: any) => {
                return (
                    <>
                    <Button type='link' onClick={() => {
                        setDetail(true)
                        setData(record)
                    }}>查看</Button>
                    <Button type='link' onClick={() => {
                        setSavevisible(true)
                        setData(record)
                    }}>编辑</Button>
                    <Button type='link' onClick={() => {
                    }}>删除</Button></>
                )
            }
        }
    ]
    return (
        <div >
            <SearchFrom
                formItems={[
                    {
                        label: '名称',
                        type: 'input',
                        name: 'name',
                    },
                    {
                        label: '年龄',
                        type: 'input',
                        name: 'age',
                    },
                    {
                        label: '班级',
                        type: 'select',
                        name: 'class',
                        selectValue: [
                            { value: '1', text: '一班' },
                            { value: '2', text: '二班' },
                            { value: '3', text: '三班' }
                        ]
                    },
                    {
                        label: '得分',
                        type: 'input',
                        name: 'number',
                    },
                ]}
                search={(res: any) => {
                    console.log(res)
                }}
                save={()=>{
                    setSavevisible(true)
                    setData({})
                }}
            />
            <Divider />
            <Table
                className="table"
                dataSource={datalist}
                columns={columns}
                rowKey='id'
            />
            {
                detail && <Detail data={data} close={()=>{
                    setDetail(false)
                }}/>
            }
            {
                savevisible && <Save data={data} close={()=>{
                    setSavevisible(false)
                }}/>
            }
        </div>

    )
}
export default User;