import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './index.css';
import { Row, Col } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
   <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        {new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
  
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>,


    </div>
  );
}

export default App;
