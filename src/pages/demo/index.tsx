import React, { useCallback, useState, useMemo } from "react";
import { Card, Row, Col,Button } from "antd";
import Btn from "./btn";


const Demo: React.FC = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const handleClick = useCallback(() => {
        setCount2(count2 + 1)
    }, [count2])
    const handleClick1 = useCallback(() => {
        setCount3(count3 + 1)
    }, [])

    return (
        <div >
            <Row justify="space-around" align="middle">
                <Col>
                    <Card title="useCallback用法" style={{ width: 400 }}>
                        <Btn count={count1} onClick={() => {
                            setCount1(count1 + 1)
                        }}>不使用usecallback</Btn>
                        {/* <Btn onClick={handleClick}>不使用usecallback</Btn> */}
                        <Btn count={count2} onClick={handleClick}>使用usecallback有依赖项</Btn>
                        <Btn count={count3} onClick={handleClick1}>使用usecallback没有依赖项</Btn>
                    </Card>
                </Col>
                <Col>
                    <Card title="useMemo用法" style={{ width: 400 }}>
                        
                    </Card>
                </Col>
            </Row>


        </div>
    )
}
export default Demo;