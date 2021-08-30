import React from "react";
import { Button, Row, Col } from "antd";

interface Poprs {
    onClick: () => void;
    children: any;
    count:number;
}

const Btn: React.FC<Poprs> = (props) => {
    return (
        <div>
            <Row justify="space-around" align="middle" style={{paddingTop:10}}>
                <Col>
                    <Button type="primary" style={{ width: 200 }}
                        onClick={props.onClick}>{props.children}</Button>
                </Col>
                <Col>{Math.floor(Math.random()*10)}</Col>
                <Col>count:{props.count}</Col>
            </Row>
        </div>
    )
}

export default React.memo(Btn);
// export default Btn;
