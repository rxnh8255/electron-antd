import React from 'react'
import { Router  } from './components'
import routes from './pages/routes'
import './styles/index.less'
import {
  HashRouter,Link
} from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="app">
      <HashRouter>
        <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">数据录入</Link></Menu.Item>
            <Menu.Item key="2">查看分析</Menu.Item>
            <Menu.Item key="3">数据管理</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />数据录入</span>}>
                <Menu.Item key="1"><Link to="/demo">demo</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/demo/1">demo1</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/demo/2">demo2</Link></Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />查看分析</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />数据管理</span>}>
                <Menu.Item key="9">导出数据</Menu.Item>
                <Menu.Item key="10">导入数据</Menu.Item>
                <Menu.Item key="11">重置数据</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              <Router routes={routes} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
      </HashRouter>
       
      </div>
    )
  }

} // class App end