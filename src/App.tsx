import React from "react";
import { Route, Link } from "react-router-dom";
import { Menu, ConfigProvider, Layout } from "antd";
import "./App.css";
import User from "./pages/user";
import Setting from "./pages/setting";
import Demo  from "./pages/demo";
const { Header, Content, Footer } = Layout;

const App = ({ match }: any) => {
  
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
              <Link to='/user'>列表</Link>
            </Menu.Item>
            <Menu.Item key="setting">
              <Link to='/setting'>....</Link>
            </Menu.Item>
            <Menu.Item key="demo">
              <Link to='/demo'>Hook</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="contentWrap">
          <div className="content">
            <Route path='/user' component={User}></Route>
            <Route path='/setting' component={Setting}></Route>
            <Route path='/demo' component={Demo}></Route>
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
