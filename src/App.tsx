import React from "react";
import { Route, Link, Router } from "react-router-dom";
import { Menu, ConfigProvider, Layout } from "antd";
import "./App.css";
import User from "./pages/user";
import Setting from "./pages/setting";
const { Header, Content, Footer } = Layout;

const App = ({ match }: any) => {
  let defaultKey = match.url.replace("/", "") || "user";
  return (
    <ConfigProvider >
      <Layout >
        <Header>
          <Menu
            mode="horizontal"
            theme="dark"
            className="menu"
            
          >
            <Menu.Item key="user">
              <Link to='/user'>学生管理</Link>
            </Menu.Item>
            <Menu.Item key="setting">
              <Link to='/setting'>系统设置</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="contentWrap">
          <div className="content">
            <Route path='/user' component={User}></Route>
            <Route path='/setting' component={Setting}></Route>
          </div>
        </Content>
        <Footer className="footer">
            hello world
        </Footer>
      </Layout>
    </ConfigProvider>
  )
}




export default App;
