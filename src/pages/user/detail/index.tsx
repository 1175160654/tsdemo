import React from 'react'
import { Modal } from 'antd';

interface Props{
    data:any;
    close:Function;
}

const Detail:React.FC<Props>= (props)=> {
    return(
        <Modal
            visible
            title={`${props.data.name}`}
            footer={[]}
            onCancel={()=>{
                props.close()
            }}
        >
            <div>班级： {props.data.class}</div>
            <div>得分： {props.data.number}</div>
        </Modal>
    )
}
export default Detail;