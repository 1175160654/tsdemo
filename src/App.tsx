import React from "react";
import { Menu, ConfigProvider, Layout } from "antd";
import "./App.css";
import Hello from "./components/Hello";
import User from "./components/user";
const { Header, Content, Footer } = Layout;

const App = () => (
  <ConfigProvider >
    <Layout style={{height:'100vh'}}>
      <Header>
        <Menu
          mode="horizontal"
          theme="dark"
          className="menu"
          defaultSelectedKeys={["employee"]}
        >
          <Menu.Item key="employee">员工管理</Menu.Item>
          <Menu.Item key="setting"> 系统设置</Menu.Item>
        </Menu>
      </Header>
      <Content className="contentWrap">
        <div className="content">
          {/* <Hello name='world'></Hello> */}
          <User></User>
        </div>
      </Content>
      <Footer className="footer">
        
      </Footer>
    </Layout>
  </ConfigProvider>
);

export default App;
