import React, { useState } from 'react';
import { DesktopOutlined, HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
};

const items = [
  getItem('Home', '', <HomeOutlined />),
  getItem('Exercise 1', 'exercise-1', <DesktopOutlined />),
  getItem('Exercise 2', 'exercise-2', <DesktopOutlined />),
  getItem('Exercise 3', 'exercise-3', <DesktopOutlined />),
  getItem('Exercise 4', 'exercise-4', <DesktopOutlined />),
  getItem('Exercise 5', 'exercise-5', <DesktopOutlined />),
  getItem('Exercise 6', 'exercise-6', <DesktopOutlined />),
  getItem('Exercise 7', 'exercise-7', <DesktopOutlined />),
  getItem('Exercise 8', 'exercise-8', <DesktopOutlined />)
];

function App() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const teste = (e) => {
    navigate(`${e.key}`);
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu onClick={teste} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: '#2c3e50',
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
